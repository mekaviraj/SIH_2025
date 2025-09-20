import { useState } from "react";
import LandingPage from "@/components/VidyarthiSaathi/LandingPage";
import ProfileSetup, { type UserProfile } from "@/components/VidyarthiSaathi/ProfileSetup";
import Quiz from "@/components/VidyarthiSaathi/Quiz";
import Results from "@/components/VidyarthiSaathi/Results";
import CollegeFinder from "@/components/VidyarthiSaathi/CollegeFinder";

type AppState = 
  | "landing"
  | "profile"
  | "quiz"
  | "results"
  | "colleges";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("landing");
  const [classLevel, setClassLevel] = useState<"10" | "12">("12");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<number[][]>([]);
  const [selectedStream, setSelectedStream] = useState<string>("");

  const handleClassSelect = (level: "10" | "12") => {
    setClassLevel(level);
    setCurrentState("profile");
  };

  const handleProfileComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentState("quiz");
  };

  const handleQuizComplete = (answers: number[][]) => {
    setQuizAnswers(answers);
    setCurrentState("results");
  };

  const handleExploreColleges = (stream: string) => {
    setSelectedStream(stream);
    setCurrentState("colleges");
  };

  const handleRetakeQuiz = () => {
    setQuizAnswers([]);
    setCurrentState("quiz");
  };

  const handleBackToLanding = () => {
    setCurrentState("landing");
    setClassLevel("12");
    setUserProfile(null);
    setQuizAnswers([]);
    setSelectedStream("");
  };

  const handleBackToProfile = () => {
    setCurrentState("profile");
  };

  const handleBackToResults = () => {
    setCurrentState("results");
  };

  // Render current component based on state
  switch (currentState) {
    case "landing":
      return <LandingPage onClassSelect={handleClassSelect} />;
    
    case "profile":
      return (
        <ProfileSetup
          classLevel={classLevel}
          onProfileComplete={handleProfileComplete}
          onBack={handleBackToLanding}
        />
      );
    
    case "quiz":
      return (
        <Quiz
          onQuizComplete={handleQuizComplete}
          onBack={handleBackToProfile}
        />
      );
    
    case "results":
      return (
        <Results
          answers={quizAnswers}
          onExploreColleges={handleExploreColleges}
          onRetakeQuiz={handleRetakeQuiz}
        />
      );
    
    case "colleges":
      return (
        <CollegeFinder
          selectedStream={selectedStream}
          onBack={handleBackToResults}
        />
      );
    
    default:
      return <LandingPage onClassSelect={handleClassSelect} />;
  }
};

export default Index;
