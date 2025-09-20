import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { colleges, getCoursesByStream, getCollegesByCourse, type College } from "@/data/collegeData";
import { 
  Search, MapPin, DollarSign, Calendar, Award, 
  ExternalLink, Filter, Building2, Users, 
  ArrowLeft, Star, Bookmark, BookOpen
} from "lucide-react";

interface CollegeFinderProps {
  selectedStream?: string;
  onBack: () => void;
}

const CollegeFinder = ({ selectedStream, onBack }: CollegeFinderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all-courses");
  const [selectedDistrict, setSelectedDistrict] = useState("all-districts");
  const [sortBy, setSortBy] = useState<"name" | "fees" | "rating">("rating");

  const streamCourses = selectedStream ? getCoursesByStream(selectedStream) : [];
  
  const districts = [...new Set(colleges.map(college => college.district))].sort();

  const filteredColleges = useMemo(() => {
    let filtered = colleges;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.district.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by course (ignore "all-courses" value)
    if (selectedCourse && selectedCourse !== "all-courses") {
      filtered = filtered.filter(college =>
        college.courses.some(course => 
          course.toLowerCase().includes(selectedCourse.toLowerCase())
        )
      );
    }

    // Filter by district (ignore "all-districts" value)
    if (selectedDistrict && selectedDistrict !== "all-districts") {
      filtered = filtered.filter(college => college.district === selectedDistrict);
    }

    // Sort colleges
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "fees":
          return a.fees.annual - b.fees.annual;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCourse, selectedDistrict, sortBy]);

  const CollegeCard = ({ college }: { college: College }) => (
    <Card className="group border-border/50 bg-card/80 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-start gap-2 text-lg leading-tight">
              <Building2 className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {college.name}
                </h3>
                <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {college.district}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Est. {college.established}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-warning text-warning" />
                    {college.rating}
                  </div>
                </div>
              </div>
            </CardTitle>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="mb-1">
              {college.type}
            </Badge>
            <div className="text-lg font-bold text-success">
              ₹{college.fees.annual.toLocaleString()}/year
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Available Courses:</h4>
          <div className="flex flex-wrap gap-1">
            {college.courses.map((course, index) => (
              <Badge 
                key={index} 
                variant={selectedCourse && course.includes(selectedCourse) ? "default" : "outline"}
                className="text-xs"
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Facilities:</h4>
          <div className="flex flex-wrap gap-1">
            {college.facilities.slice(0, 4).map((facility, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {facility}
              </Badge>
            ))}
            {college.facilities.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{college.facilities.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-sm text-muted-foreground">
            <Award className="mr-1 inline h-3 w-3" />
            {college.affiliation}
          </div>
          <Button size="sm" variant="outline" asChild>
            <a href={college.website} target="_blank" rel="noopener noreferrer">
              Visit Website
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Results
          </Button>
          
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold gradient-text">Government Colleges</h1>
            {selectedStream && (
              <div className="mb-2">
                <Badge variant="default" className="text-sm">
                  <BookOpen className="mr-1 h-4 w-4" />
                  {selectedStream} Stream
                </Badge>
              </div>
            )}
            <p className="text-lg text-muted-foreground">
              Discover affordable, quality education at government institutions in Jammu & Kashmir
            </p>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Filter className="h-5 w-5" />
              Find Your Perfect College
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search Colleges</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="College name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Course</label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-courses">All Courses</SelectItem>
                    {(selectedStream ? streamCourses : [...new Set(colleges.flatMap(c => c.courses))]).map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">District</label>
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-districts">All Districts</SelectItem>
                    {districts.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select value={sortBy} onValueChange={(value: "name" | "fees" | "rating") => setSortBy(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="fees">Fees (Low to High)</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Found {filteredColleges.length} College{filteredColleges.length !== 1 ? 's' : ''}
          </h2>
          {filteredColleges.length > 0 && (
            <Badge variant="outline">
              <Users className="mr-1 h-3 w-3" />
              Government Institutions
            </Badge>
          )}
        </div>

        {/* College Grid */}
        {filteredColleges.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        ) : (
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="py-12 text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">No colleges found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or explore all available colleges.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCourse("all-courses");
                  setSelectedDistrict("all-districts");
                }}
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Bottom CTA */}
        <Card className="mt-12 border-primary/20 bg-primary/5">
          <CardContent className="py-8 text-center">
            <h3 className="mb-2 text-lg font-semibold text-primary">Need More Help?</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Contact the colleges directly for admission requirements, entrance exams, and application deadlines.
            </p>
            <Button variant="outline" onClick={onBack}>
              Explore Other Streams
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegeFinder;