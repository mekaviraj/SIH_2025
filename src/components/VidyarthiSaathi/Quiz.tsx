import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizQuestions, type QuizQuestion } from "@/data/quizData";
import { CheckCircle, Circle, Brain, ArrowLeft, ArrowRight } from "lucide-react";

interface QuizProps {
  onQuizComplete: (answers: number[][]) => void;
  onBack: () => void;
}

const Quiz = ({ onQuizComplete, onBack }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[][]>(
    new Array(quizQuestions.length).fill([])
  );
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  const handleOptionSelect = (optionIndex: number) => {
    const newSelected = selectedOptions.includes(optionIndex)
      ? selectedOptions.filter(i => i !== optionIndex)
      : [...selectedOptions, optionIndex];
    
    setSelectedOptions(newSelected);
    
    // Update answers array
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = newSelected;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptions(answers[currentQuestion + 1] || []);
    } else {
      // Quiz completed
      onQuizComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOptions(answers[currentQuestion - 1] || []);
    } else {
      onBack();
    }
  };

  const isQuestionAnswered = selectedOptions.length > 0;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Brain className="h-8 w-8" />
          </div>
          <h1 className="mb-2 text-3xl font-bold gradient-text">Career Discovery Quiz</h1>
          <p className="text-muted-foreground">
            Answer honestly to get the most accurate career recommendations
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <Badge variant="secondary">{Math.round(progress)}% Complete</Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
            <CardDescription>
              Select all options that apply to you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedOptions.includes(index);
              return (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-md ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-primary"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {isSelected ? (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm leading-relaxed ${
                        isSelected ? "font-medium text-primary" : "text-foreground"
                      }`}>
                        {option.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation */}
            <div className="flex gap-3 pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {currentQuestion === 0 ? "Back to Profile" : "Previous"}
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isQuestionAnswered}
                variant={isLastQuestion ? "success" : "default"}
                className="flex-1"
              >
                {isLastQuestion ? (
                  <>
                    Complete Quiz
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next Question
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quiz Tips */}
        <Card className="mt-6 border-success/20 bg-success/5">
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-1">💡 <strong>Tip:</strong> There are no right or wrong answers!</p>
              <p>Choose options that truly reflect your interests and preferences.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;