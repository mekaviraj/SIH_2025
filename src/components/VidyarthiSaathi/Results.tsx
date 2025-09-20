import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { calculateResults, type StreamResult } from "@/data/quizData";
import { Trophy, TrendingUp, BookOpen, Users, Sparkles, ExternalLink } from "lucide-react";

interface ResultsProps {
  answers: number[][];
  onExploreColleges: (stream: string) => void;
  onRetakeQuiz: () => void;
}

const Results = ({ answers, onExploreColleges, onRetakeQuiz }: ResultsProps) => {
  const results = calculateResults(answers);
  const topResult = results[0];
  const secondResult = results[1];
  const thirdResult = results[2];

  const getStreamIcon = (stream: string) => {
    switch (stream.toLowerCase()) {
      case 'science':
        return "🔬";
      case 'commerce':
        return "📈";
      case 'arts':
      case 'arts/humanities':
        return "🎨";
      case 'vocational':
      case 'vocational/technical':
        return "⚙️";
      default:
        return "📚";
    }
  };

  const getStreamColor = (color: string) => {
    const colorMap = {
      primary: "border-primary bg-primary/5 text-primary",
      success: "border-success bg-success/5 text-success",
      warning: "border-warning bg-warning/5 text-warning",
      accent: "border-accent bg-accent/5 text-accent"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const ResultCard = ({ result, rank }: { result: StreamResult; rank: number }) => (
    <Card className={`border-2 ${getStreamColor(result.color)} transition-all hover:shadow-lg hover:-translate-y-1`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{getStreamIcon(result.stream)}</div>
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                {result.stream}
                {rank === 1 && <Trophy className="h-5 w-5 text-warning" />}
              </CardTitle>
              <CardDescription>{result.description}</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="text-sm font-semibold">
            {result.percentage}% Match
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">Compatibility Score</span>
            <span className="text-muted-foreground">{result.score} points</span>
          </div>
          <Progress value={result.percentage} className="h-2" />
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Popular Career Options:</h4>
          <div className="flex flex-wrap gap-1">
            {result.careers.slice(0, 3).map((career, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {career}
              </Badge>
            ))}
            {result.careers.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{result.careers.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Recommended Courses:</h4>
          <div className="flex flex-wrap gap-1">
            {result.courses.slice(0, 3).map((course, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          onClick={() => onExploreColleges(result.stream)}
          variant={rank === 1 ? "default" : "outline"}
          className="w-full"
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Explore {result.stream} Colleges
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-bg-primary text-primary-foreground shadow-glow">
            <Sparkles className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-4xl font-bold gradient-text">Your Career Path Revealed!</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Based on your responses, we've identified the perfect streams that align with your interests and strengths.
          </p>
        </div>

        {/* Top Recommendation */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-warning" />
            <h2 className="text-2xl font-bold">Your Best Match</h2>
          </div>
          <ResultCard result={topResult} rank={1} />
        </div>

        {/* Other Recommendations */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Other Great Options</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <ResultCard result={secondResult} rank={2} />
            <ResultCard result={thirdResult} rank={3} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            onClick={() => onExploreColleges(topResult.stream)}
            className="flex-1 sm:flex-initial"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Find {topResult.stream} Colleges
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onRetakeQuiz}
            className="flex-1 sm:flex-initial"
          >
            Retake Quiz
          </Button>
        </div>

        {/* Additional Information */}
        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="mb-2 font-semibold text-primary">🎯 What's Next?</h3>
              <p className="text-sm text-muted-foreground">
                Explore government colleges offering your recommended courses. 
                All colleges in our database are affordable and offer quality education with excellent career prospects.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Share Results */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            💡 Save this page or take a screenshot to remember your recommendations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
