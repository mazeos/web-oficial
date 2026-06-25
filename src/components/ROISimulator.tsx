import React, { useState, useCallback } from 'react';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, DollarSign, Target, Phone, Users, Percent, Megaphone, AlertTriangle, ArrowRight, CalendarCheck } from 'lucide-react';
const questions = [{
  id: 'ticketPrice',
  label: '¿Cuánto cobras tu ticket promedio?',
  type: 'currency',
  max: 10000,
  step: 100,
  defaultValue: 1000,
  critical: false,
  hasMoreOption: true,
  icon: DollarSign
}, {
  id: 'dailyConversations',
  label: '¿Cuántas conversaciones abres al día?',
  type: 'number',
  max: 500,
  step: 10,
  defaultValue: 50,
  critical: true,
  hasMoreOption: true,
  icon: Users
}, {
  id: 'dailyCalls',
  label: '¿Qué % de conversaciones agendan llamada?',
  type: 'percent',
  max: 100,
  step: 5,
  defaultValue: 20,
  critical: true,
  hasMoreOption: false,
  icon: Phone
}, {
  id: 'qualifiedCalls',
  label: '¿Qué % de llamadas son calificadas?',
  type: 'percent',
  max: 100,
  step: 5,
  defaultValue: 50,
  critical: true,
  hasMoreOption: false,
  icon: Target
}, {
  id: 'showRate',
  label: '¿Qué % se presentan?',
  type: 'percent',
  max: 100,
  step: 5,
  defaultValue: 60,
  critical: true,
  hasMoreOption: false,
  icon: CalendarCheck
}, {
  id: 'closeRate',
  label: '¿Qué % cierran?',
  type: 'percent',
  max: 100,
  step: 5,
  defaultValue: 20,
  critical: true,
  hasMoreOption: false,
  icon: TrendingUp
}, {
  id: 'adInvestment',
  label: '¿Cuánto inviertes en publicidad?',
  type: 'currency',
  max: 100000,
  step: 500,
  defaultValue: 1000,
  critical: false,
  hasMoreOption: true,
  icon: Megaphone
}] as const;
type QuestionId = typeof questions[number]['id'];
interface QuestionState {
  value: number;
  notMeasured: boolean;
  isMaxOrMore: boolean;
  hasInteracted: boolean;
}
const ROISimulator = () => {
  const [showResults, setShowResults] = useState(false);
  const [criticalNotMeasured, setCriticalNotMeasured] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<QuestionId, QuestionState>>(() => {
    const initial: Record<string, QuestionState> = {};
    questions.forEach(q => {
      initial[q.id] = {
        value: q.defaultValue,
        notMeasured: false,
        isMaxOrMore: false,
        hasInteracted: false
      };
    });
    return initial as Record<QuestionId, QuestionState>;
  });

  // Calculate how many questions should be visible based on interactions
  const getVisibleCount = useCallback(() => {
    if (criticalNotMeasured) {
      // Stop at the critical question that wasn't measured
      const criticalIndex = questions.findIndex(q => q.id === criticalNotMeasured);
      return criticalIndex + 1;
    }
    let count = 1; // First question always visible
    for (let i = 0; i < questions.length - 1; i++) {
      const currentQuestion = questions[i];
      if (answers[currentQuestion.id].hasInteracted) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }, [answers, criticalNotMeasured]);
  const visibleCount = getVisibleCount();
  const handleInputChange = useCallback((id: QuestionId, inputValue: string, type: string) => {
    // Remove non-numeric characters except for the value
    const cleanValue = inputValue.replace(/[^0-9]/g, '');
    const numericValue = cleanValue === '' ? 0 : parseInt(cleanValue, 10);
    setAnswers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        value: numericValue,
        hasInteracted: true,
        isMaxOrMore: false
      }
    }));
  }, []);
  const handleNotMeasuredChange = useCallback((id: QuestionId, checked: boolean, isCritical: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        notMeasured: checked,
        hasInteracted: true
      }
    }));
    if (checked && isCritical) {
      // Critical metric not measured - stop the simulation
      setCriticalNotMeasured(id);
      setShowResults(false);
    } else if (!checked && criticalNotMeasured === id) {
      // User unchecked "no lo mido" - allow to continue
      setCriticalNotMeasured(null);
    }
  }, [criticalNotMeasured]);
  const handleMaxOrMoreChange = useCallback((id: QuestionId, checked: boolean, question: typeof questions[number]) => {
    setAnswers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaxOrMore: checked,
        hasInteracted: true,
        // If switching to manual input, keep the max value; if switching back to slider, cap at max
        value: checked ? prev[id].value : Math.min(prev[id].value, question.max)
      }
    }));
  }, []);
  const handleSliderChange = useCallback((id: QuestionId, value: number[]) => {
    setAnswers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        value: value[0],
        hasInteracted: true
      }
    }));
  }, []);
  const formatValue = (value: number, type: string, isMaxOrMore: boolean) => {
    if (type === 'currency') return `$${value.toLocaleString()}`;
    if (type === 'percent') return `${value}%`;
    return value.toString();
  };
  const getInputDisplayValue = (value: number, type: string) => {
    if (type === 'currency') return value.toLocaleString();
    return value.toString();
  };
  const getQuestionLabel = (question: typeof questions[number]) => {
    const q = question;
    const answer = answers[q.id];
    if (answer.notMeasured) return 'No lo mido';
    return formatValue(answer.value, q.type, answer.isMaxOrMore);
  };

  // Calculations
  const ticketPrice = answers.ticketPrice.value;
  const dailyConversations = answers.dailyConversations.value;
  const adInvestment = answers.adInvestment.value;

  // Funnel rates (all percentages now)
  const callRate = answers.dailyCalls.value / 100;
  const qualifiedRate = answers.qualifiedCalls.value / 100;
  const showRate = answers.showRate.value / 100;
  const closeRate = answers.closeRate.value / 100;

  // Monthly funnel metrics (30 days)
  const monthlyConversations = dailyConversations * 30;
  const monthlyScheduledCalls = monthlyConversations * callRate;
  const monthlyQualifiedCalls = monthlyScheduledCalls * qualifiedRate;
  const monthlyPresentedCalls = monthlyQualifiedCalls * showRate;
  const closedDeals = monthlyPresentedCalls * closeRate;

  // Current metrics
  const monthlyRevenue = closedDeals * ticketPrice;
  const currentCAC = closedDeals > 0 ? adInvestment / closedDeals : 0;
  const currentROAS = adInvestment > 0 ? monthlyRevenue / adInvestment : 0;

  // With Maze Funnels (-40% CAC)
  const mazeCAC = currentCAC * 0.6;
  const mazeSavings = (currentCAC - mazeCAC) * closedDeals;
  const mazeROAS = currentROAS * 1.4; // Inverse of 40% reduction

  // Plan recommendation
  const netProfit = monthlyRevenue - adInvestment;
  const recommendedPlan = netProfit < 1000 ? 'Maze OS' : 'Funnel OS';
  const planPrice = recommendedPlan === 'Maze OS' ? 17 : 97;
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleCalculate = () => {
    setShowResults(true);
  };
  const allQuestionsAnswered = questions.every(q => answers[q.id].hasInteracted);
  const canCalculate = allQuestionsAnswered && !criticalNotMeasured;
  return <section id="roi-simulator" className="py-12 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Calculator className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Simulador de ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Descubre tu <span className="text-gradient">potencial real</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Responde estas preguntas y te mostraremos cómo optimizar tu negocio
          </p>
        </div>

        {/* Questions - Cascading Reveal */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-2xl mx-auto mb-6 md:mb-8">
          {questions.slice(0, visibleCount).map((question, index) => {
          const IconComponent = question.icon;
          const answer = answers[question.id];
          const isLatest = index === visibleCount - 1;
          const isDisabled = criticalNotMeasured !== null && criticalNotMeasured !== question.id && index >= questions.findIndex(q => q.id === criticalNotMeasured);
          return <div key={question.id} className={`
                  glass-effect rounded-xl md:rounded-2xl p-4 md:p-6 border transition-all duration-500
                  ${isLatest ? 'animate-[cascadeReveal_0.4s_ease-out_forwards] border-primary/30' : 'border-white/10'}
                  ${answer.notMeasured && question.critical ? 'border-amber-500/50 bg-amber-500/5' : ''}
                  ${isDisabled ? 'opacity-50 pointer-events-none' : ''}
                `} style={{
            animationDelay: isLatest ? '0ms' : '0ms'
          }}>
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className={`
                    p-2 md:p-3 rounded-lg md:rounded-xl 
                    ${question.critical ? 'bg-primary/20' : 'bg-white/10'}
                  `}>
                    <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${question.critical ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1">
                      <h3 className="font-semibold text-sm md:text-base text-foreground">{question.label}</h3>
                      {question.critical && <span className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                          Crítico
                        </span>}
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-primary">
                      {getQuestionLabel(question)}
                    </p>
                  </div>
                </div>

                {!answer.notMeasured && <div className="space-y-4">
                    {/* Show Input if isMaxOrMore is true, otherwise show Slider */}
                    {answer.isMaxOrMore ? <div className="relative">
                        {question.type === 'currency' && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-primary">$</span>}
                        <Input type="text" inputMode="numeric" value={getInputDisplayValue(answer.value, question.type)} onChange={e => handleInputChange(question.id, e.target.value, question.type)} className={`
                            h-14 text-xl font-bold bg-white/5 border-white/20 
                            focus:border-primary focus:ring-primary/30
                            ${question.type === 'currency' ? 'pl-10' : 'pl-4'}
                            ${question.type === 'percent' ? 'pr-10' : 'pr-4'}
                          `} placeholder="0" />
                        {question.type === 'percent' && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-primary">%</span>}
                      </div> : <div className="space-y-3">
                        <Slider value={[answer.value]} onValueChange={value => handleSliderChange(question.id, value)} max={question.max} step={question.step} className="w-full" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>
                            {question.type === 'currency' ? '$0' : question.type === 'percent' ? '0%' : '0'}
                          </span>
                          <span>
                            {question.type === 'currency' ? `$${question.max.toLocaleString()}` : question.type === 'percent' ? `${question.max}%` : question.max.toLocaleString()}
                          </span>
                        </div>
                      </div>}

                    {/* "Is more than max" toggle - only for questions with hasMoreOption */}
                    {question.hasMoreOption && answer.value >= question.max && !answer.isMaxOrMore && <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Switch checked={answer.isMaxOrMore} onCheckedChange={checked => handleMaxOrMoreChange(question.id, checked, question)} />
                        <span className="text-sm text-primary font-medium">
                          ¿Es más de {question.type === 'currency' ? `$${question.max.toLocaleString()}` : question.max.toLocaleString()}?
                        </span>
                      </div>}

                    {/* Show toggle to go back to slider when in manual mode */}
                    {answer.isMaxOrMore && <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Switch checked={answer.isMaxOrMore} onCheckedChange={checked => handleMaxOrMoreChange(question.id, checked, question)} />
                        <span className="text-sm text-primary font-medium">
                          Ingresando valor manual (más de {question.type === 'currency' ? `$${question.max.toLocaleString()}` : question.max.toLocaleString()})
                        </span>
                      </div>}
                  </div>}

                {/* "No lo mido" toggle */}
                <div className={`
                  flex items-center gap-3 mt-4 pt-4 border-t 
                  ${answer.notMeasured && question.critical ? 'border-amber-500/30' : 'border-white/10'}
                `}>
                  <Switch checked={answer.notMeasured} onCheckedChange={checked => handleNotMeasuredChange(question.id, checked, question.critical)} />
                  <span className={`text-sm ${answer.notMeasured && question.critical ? 'text-amber-400 font-medium' : 'text-muted-foreground'}`}>
                    Aún no lo mido
                  </span>
                </div>
              </div>;
        })}
        </div>

        {/* Critical Not Measured Warning */}
        {criticalNotMeasured && <div className="max-w-2xl mx-auto mb-8 animate-[cascadeReveal_0.4s_ease-out_forwards]">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-2 border-amber-500/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <AlertTriangle className="w-8 h-8 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-amber-400 mb-2">
                    ⚠️ Necesitas claridad inmediata
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Sin medir esta métrica crítica, estás <strong className="text-foreground">navegando a ciegas</strong> en tu negocio. 
                    El 80% de negocios que no miden sus números pierden hasta un 40% de oportunidades.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Activa un plan ahora para obtener <strong className="text-primary">visibilidad completa</strong> de tus números 
                    y toma decisiones basadas en datos reales.
                  </p>
                  <button onClick={scrollToPricing} className="flex items-center gap-2 py-4 px-8 rounded-xl bg-amber-500 text-black font-bold 
                      hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    Ver planes ahora
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>}

        {/* Progress indicator */}
        {!criticalNotMeasured && visibleCount < questions.length && <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Pregunta {visibleCount} de {questions.length}</span>
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-500" style={{
              width: `${visibleCount / questions.length * 100}%`
            }} />
              </div>
            </div>
          </div>}

        {/* Calculate Button */}
        {canCalculate && !showResults && <div className="max-w-2xl mx-auto mb-8 animate-[cascadeReveal_0.4s_ease-out_forwards]">
            <button onClick={handleCalculate} className="w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground 
                font-bold text-lg hover:shadow-[0_0_40px_hsl(84_100%_64%/0.4)] transition-all duration-300
                flex items-center justify-center gap-3">
              <Calculator className="w-6 h-6" />
              Calcular mi potencial
            </button>
          </div>}

        {/* Results Section */}
        {showResults && !criticalNotMeasured && <div className="max-w-4xl mx-auto animate-[cascadeReveal_0.4s_ease-out_forwards]">
            <div className="glass-effect rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/20">
              {/* Results Header */}
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Tu análisis personalizado</h3>
                <p className="text-sm md:text-base text-muted-foreground">Basado en tus métricas actuales</p>
              </div>

              {/* Comparison Grid */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {/* Current Numbers */}
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-4 text-muted-foreground">📊 Tus números actuales</h4>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-base text-muted-foreground">Facturación mensual</span>
                      <span className="text-base md:text-xl font-bold">${monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-base text-muted-foreground">ROAS</span>
                      <span className="text-base md:text-xl font-bold">{currentROAS.toFixed(2)}x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-base text-muted-foreground">CAC</span>
                      <span className="text-base md:text-xl font-bold">${currentCAC.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-white/10">
                      <span className="text-xs md:text-base text-muted-foreground">Ganancia neta</span>
                      <span className="text-base md:text-xl font-bold">${netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* With Maze Funnels */}
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-primary/10 border-2 border-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-2 md:px-3 py-0.5 md:py-1 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold rounded-bl-lg md:rounded-bl-xl">
                    -40% CAC
                  </div>
                  <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-4 text-primary">🚀 Con Maze Funnels</h4>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-base text-muted-foreground">Facturación mensual</span>
                      <span className="text-base md:text-xl font-bold">${monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-base text-muted-foreground">ROAS</span>
                      <span className="text-base md:text-xl font-bold text-primary">{mazeROAS.toFixed(2)}x ↑</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-base text-muted-foreground">CAC</span>
                      <span className="text-base md:text-xl font-bold text-primary">${mazeCAC.toFixed(0)} ↓</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-primary/30">
                      <span className="text-xs md:text-base text-muted-foreground">Ahorro mensual</span>
                      <span className="text-lg md:text-2xl font-bold text-primary">${mazeSavings.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Claim */}
              <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-primary/5 border border-primary/20 mb-6 md:mb-8 text-center">
                <p className="text-xs md:text-sm text-muted-foreground">
                  💡 <strong className="text-foreground">El 80% de nuestros clientes</strong> que invierten en pauta publicitaria 
                  <strong className="text-primary"> reducen su CAC un 40%</strong> usando nuestro software para marketing y ventas.
                </p>
              </div>

              {/* Recommended Plan */}
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Plan recomendado para ti</p>
                    <h4 className="text-2xl md:text-3xl font-bold text-primary">{recommendedPlan}</h4>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      Solo <strong className="text-foreground">${planPrice}/mes</strong>
                    </p>
                  </div>
                  <button onClick={scrollToPricing} className="flex items-center gap-2 py-3 md:py-4 px-6 md:px-8 rounded-lg md:rounded-xl bg-primary text-primary-foreground font-bold text-sm md:text-base
                      hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(84_100%_64%/0.4)] w-full md:w-auto justify-center">
                    Ver planes y elegir
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </div>

      <style>{`
        @keyframes cascadeReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>;
};
export default ROISimulator;