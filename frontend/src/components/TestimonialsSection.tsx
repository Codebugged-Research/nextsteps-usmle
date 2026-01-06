import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoTestimonials = [
  {
    title: "Student Success Story 1",
    embedId: "BJGA_phgISs",
    si: "q_L93LNiTvW3-t4U"
  },
  {
    title: "Student Success Story 2",
    embedId: "6gA38wtatrw",
    si: "0y2WvyLwgcPqFlnj"
  },
  {
    title: "Student Success Story 3",
    embedId: "tCCXM9AzQ3k",
    si: "s8KakjlC93KfwVKN"
  },
  {
    title: "Student Success Story 4",
    embedId: "9st_BQhTgcc",
    si: "dVhv5KTTF73L_yPw"
  },
  {
    title: "Student Success Story 5",
    embedId: "QCrBPJzimVY",
    si: "ckga-k2mJZJ1AKVv"
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
                className="flex-shrink-0 w-[300px] md:w-[500px] snap-start group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="aspect-video relative">
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
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {writtenTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] snap-start bg-card border-border hover:shadow-card transition-all duration-300 rounded-2xl"
              >
                <CardContent className="p-8">
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
                  <div className="border-t border-border pt-6 flex items-center gap-4">
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
