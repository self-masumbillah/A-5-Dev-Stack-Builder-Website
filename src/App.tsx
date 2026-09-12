import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./components/TechCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.BASE_URL}technologies.json`
        );

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Technology loading error:", error);
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section
        className="technology-section"
        id="technologies"
      >
        <div className="technology-container">
          <div className="technology-heading">
            <h2 className="technology-title">
              Explore the <span>Technologies</span>
            </h2>

            <p className="technology-subtitle">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <div className="technology-loading">
              <div className="loading-spinner"></div>
              <p>Loading technologies...</p>
            </div>
          ) : (
            <div className="technology-layout">
              <div className="tech-grid">
                {technologies.map((technology) => (
                  <TechCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>

              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          )}
        </div>
      </section>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;