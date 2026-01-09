import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoTestimonials = [
  {
    title: "Student Success Story 1",
    embedId: "qfVqppnU7pU",
    si: "y0lw57q8xtGMoOhe"
  },
  {
    title: "Student Success Story 2",
    embedId: "lOtVLm_sEZc",
    si: "7nY58EA27CCubCSM"
  },
  {
    title: "Student Success Story 3",
    embedId: "IW1wsk3Wd4E",
    si: "NxVx4cr5w_RTpCkU"
  },
  {
    title: "Student Success Story 4",
    embedId: "guFNeraUbTU",
    si: "FlUKdRCxGzTdXynC"
  },
  {
    title: "Student Success Story 5",
    embedId: "JeaRKwM7KiY",
    si: "ufYcib2ZrqESditJ"
  },
];

const writtenTestimonials = [
  {
    name: "Dr. Niyati Shah",
    institution: "Petre Shotadze Tbilisi Medical Academy, Georgia",
    rating: 4,
    text: "The live classes, doubt-solving is amazing. Mentor coordinator and whole team are really helpful in USMLE journey. The environment is very supportive even for minor doubts."
  },
  {
    name: "Greeshma Mathyari",
    institution: "Odessa National Medical University, Ukraine",
    rating: 5,
    text: "Next Steps provides really good coaching with supportive mentors, interactive live classes and personalized study plans, tailored to each student's needs."
  },
  {
    name: "Rahitya Manchineela",
    institution: "Fathima Institute of Medical Sciences, Kadapa",
    rating: 4,
    text: "The team is very helpful in every aspect regarding USMLE journey and it's very helpful for me to study in an organized way."
  },
  {
    name: "Justin Jose",
    institution: "West China School of Medicine, China",
    rating: 5,
    text: "They are very helpful for your USMLE preparations. The staff are very cooperative with all concerns you have and will help you to make the best decision."
  },
  {
    name: "Plaksha Reddy",
    institution: "Gomel State Medical University, Belarus",
    rating: 4,
    text: "Next steps has really efficient study plans and knowledgable mentors for guidance...."
  },
  {
    name: "Raghu Kumar",
    institution: "Kempegowda Institute of Medical Sciences, Bangalore",
    rating: 5,
    text: "Its an excellent platform, it keeps me on track of my step exam prep as well as cv building simultaneously."
  },
  {
    name: "Quader Naseer",
    institution: "Ayaan Institute of Medical Sciences, Hyderabad",
    rating: 4,
    text: "A great tool for those getting ready for the USMLE is Next Steps. The team is skilled and informed, and they offer thorough and efficient help throughout the entire procedure."
  },
  {
    name: "Sanjay Keerthipati",
    institution: "RVM Medical College, Mulugu",
    rating: 5,
    text: "Next Steps is a fantastic resource for those preparing for the USMLE exam. The staff is knowledgeable and experienced, and they support throughout the entire process."
  },
  {
    name: "Bharath Korrapati",
    institution: "SV Medical College, Tirupati",
    rating: 5,
    text: "Recommended for usmle aspirants who want to boost their CV. They help you to publish atleast 2 research articles and case presentations"
  },
  {
    name: "Anjali Gorantla",
    institution: "Guntur Medical College, AP",
    rating: 5,
    text: "I shadowed under Dr.Shazad at glen oaks Chicago, with next steps I had the best US CLINICAL experience. I had access to the inpatients and outpatients and I learned a lot under Dr. Shazad."
  }
];

const TestimonialsSection = () => {
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const textScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Success Stories from <span className="gradient-text">Next Steps</span> Students
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear directly from our students who have mastered the USMLE with our guidance and support.
          </p>
        </div>

        {/* Video Testimonials - Horizontal Scroll with Buttons */}
        <div className="mb-24 relative group">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
              Video Testimonials
            </h3>
            <div className="hidden md:flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll(videoScrollRef, 'left')}
                className="rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll(videoScrollRef, 'right')}
                className="rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div
            ref={videoScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none scrollbar-hide snap-x h-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] md:w-[300px] snap-start group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="aspect-[9/16] relative bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}?si=${video.si}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile indicator */}
          <p className="text-xs text-muted-foreground mt-4 md:hidden text-center opacity-60">
            Swipe to see more stories
          </p>

          {/* Watch More Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://www.youtube.com/playlist?list=PLHsOObYl5mXeqPPBRjMnByWeGSRQTctNs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg group transition-all">
                Watch More Success Stories
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Written Testimonials - Horizontal Scroll with Buttons */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground border-l-4 border-secondary pl-4">
              Student Experiences
            </h3>
            <div className="hidden md:flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll(textScrollRef, 'left')}
                className="rounded-full hover:bg-secondary hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll(textScrollRef, 'right')}
                className="rounded-full hover:bg-secondary hover:text-white transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div
            ref={textScrollRef}
            className="flex gap-6 items-stretch overflow-x-auto pb-6 scrollbar-none scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {writtenTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] snap-start bg-card border-border hover:shadow-card transition-all duration-300 rounded-2xl flex flex-col"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted opacity-30"}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-6 flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.institution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Mobile indicator */}
          <p className="text-xs text-muted-foreground mt-4 md:hidden text-center opacity-60">
            Swipe to read more
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
