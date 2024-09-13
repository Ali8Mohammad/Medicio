import React from 'react'
import team1 from "./../assets/img/testimonials/testimonials-1.jpg";
import team2 from "./../assets/img/testimonials/testimonials-2.jpg";
import team3 from "./../assets/img/testimonials/testimonials-3.jpg";
import team4 from "./../assets/img/testimonials/testimonials-4.jpg";
import team5 from "./../assets/img/testimonials/testimonials-5.jpg";

const TestimonialsSlider = () => {
    const quotesData = [
  
        {
          quote:
            "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
          image: team1,
          name: "John Doe",
          profession: "Software Engineer",
        },
        {
          quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
          image: team2,
          name: "Jane Smith",
          profession: "Product Manager",
        },
        {
          quote:
            "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
          image: team3,
          name: "Alice Johnson",
          profession: "UX Designer",
        },
        {
          quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
          image: team4,
          name: "Robert Brown",
          profession: "CEO",
        },
        {
          quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
          image: team5,
          name: "Michael Lee",
          profession: "Entrepreneur",
        },
      ];
  return quotesData
}

export default TestimonialsSlider