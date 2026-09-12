import React from "react";

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}

interface TechCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechCard: React.FC<TechCardProps> = ({
  technology,
  isAdded,
  onAdd,
}) => {
  return (
    <article className="tech-card">

      {/* Top Section */}
      <div className="tech-card-top">

        <div className="tech-icon-wrapper">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="tech-icon"
          />
        </div>

        <span className="tech-badge">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h3 className="tech-name">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="tech-description">
        {technology.description}
      </p>

      {/* Meta Information */}
      <div className="tech-meta">

        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          <span className="star">★</span>
          {technology.rating.toFixed(1)}
        </span>

      </div>

      {/* Add Button */}
      <button
        type="button"
        className={`add-stack-btn ${isAdded ? "added" : ""}`}
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </article>
  );
};

export default TechCard;