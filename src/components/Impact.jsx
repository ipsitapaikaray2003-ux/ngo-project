import "./Impact.css";
import { useState, useEffect, useRef } from "react";

function Counter({ end, text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;

          const timer = setInterval(() => {
            start += Math.ceil(end / 60);

            if (start >= end) {
              start = end;
              clearInterval(timer);
            }

            setCount(start);
          }, 30);

          return () => clearInterval(timer);
        } else {
          setCount(0); // Scroll bahar jaate hi reset
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="impact-card" ref={ref}>
      <h2>{count}+</h2>
      <p>{text}</p>
    </div>
  );
}

function Impact() {
  return (
    <section className="impact">

      <div className="impact-heading">
        <span>OUR IMPACT</span>
        <h2>Making a Difference Together</h2>
      </div>

      <div className="impact-container">

        <Counter end={5000} text="Lives Impacted" />

        <Counter end={100} text="Volunteers" />

        <Counter end={50} text="Projects Completed" />

        <Counter end={8} text="Years of Service" />

      </div>

    </section>
  );
}

export default Impact;