import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, GraduationCap } from "lucide-react";

interface ProfileSetupProps {
  classLevel: "10" | "12";
  onProfileComplete: (profile: UserProfile) => void;
  onBack: () => void;
}

export interface UserProfile {
  name: string;
  classLevel: "10" | "12";
  district: string;
  state: string;
}

const ProfileSetup = ({ classLevel, onProfileComplete, onBack }: ProfileSetupProps) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    classLevel,
    district: "",
    state: "Jammu & Kashmir"
  });

  const [errors, setErrors] = useState<Partial<UserProfile>>({});

  const districts = [
    "Jammu", "Srinagar", "Baramulla", "Kathua", "Udhampur", "Doda", "Rajouri", 
    "Kupwara", "Pulwama", "Poonch", "Leh", "Kargil", "Ganderbal", "Budgam",
    "Anantnag", "Bandipora", "Shopian", "Kulgam", "Ramban", "Kishtwar",
    "Samba", "Reasi"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Partial<UserProfile> = {};
    if (!profile.name.trim()) newErrors.name = "Name is required";
    if (!profile.district) newErrors.district = "District is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onProfileComplete(profile);
  };

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-8 w-8" />
          </div>
          <h1 className="mb-2 text-3xl font-bold gradient-text">Tell us about yourself</h1>
          <p className="text-muted-foreground">
            Help us personalize your career guidance experience
          </p>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Student Profile
            </CardTitle>
            <CardDescription>
              Class {classLevel} • Jammu & Kashmir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={profile.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Select
                  value={profile.district}
                  onValueChange={(value) => handleInputChange("district", value)}
                >
                  <SelectTrigger className={errors.district ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your district" />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map((district) => (
                      <SelectItem key={district} value={district}>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          {district}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.district && (
                  <p className="text-sm text-destructive">{errors.district}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>State</Label>
                <Input
                  value="Jammu & Kashmir"
                  disabled
                  className="bg-muted"
                />
                <p className="text-xs text-muted-foreground">
                  Currently focusing on J&K colleges
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  className="flex-1"
                >
                  Continue to Quiz
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Your information is safe and used only for personalization</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;