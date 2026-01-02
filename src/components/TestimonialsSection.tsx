import { Card, CardContent } from "@/components/ui/card";
import { Star, Play } from "lucide-react";

const videoTestimonials = [
  {
    name: "Dr. Niyati Shah",
    institution: "Petre Shotadze Tbilisi Medical Academy, Georgia",
    thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
  },
  {
    name: "Greeshma Mathyari",
    institution: "Odessa National Medical University, Ukraine",
    thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
  },
  {
    name: "Justin Jose",
    institution: "West China School of Medicine, China",
    thumbnail: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop",
  },
  {
    name: "Rahitya Manchineela",
    institution: "Fathima Institute of Medical Sciences, Kadapa",
    thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
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
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            What They Say About <span className="gradient-text">Next Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our students who have successfully navigated their USMLE journey with us.
          </p>
        </div>

        {/* Video Testimonials - Horizontal Scroll */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-4">Video Testimonials</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-72 group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden mb-3">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <p className="font-semibold text-foreground text-sm">{video.name}</p>
                <p className="text-xs text-muted-foreground">{video.institution}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">← Scroll to see more</p>
        </div>

        {/* Written Testimonials - Horizontal Scroll */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Written Testimonials</h3>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            {writtenTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0 w-80 bg-card border-border hover:shadow-card transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} 
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.institution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">← Scroll to see more</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
