import React from "react";
import type { Technology } from "./TechCard";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack: React.FC<YourStackProps> = ({
  stack,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <aside className="your-stack">

      {/* Header */}
      <div className="stack-header">

        <h2 className="stack-title">
          Your Stack
        </h2>

        <p className="stack-count">
          {stack.length}{" "}
          {stack.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>

      </div>

      {/* Stack Content */}
      <div className="stack-content">

        {stack.length === 0 ? (
          <div className="stack-empty">
            <div className="empty-icon">
              +
            </div>

            <p>
              Your selected technologies
              <br />
              will appear here.
            </p>
          </div>
        ) : (
          <div className="stack-items">

            {stack.map((technology) => (
              <div
                className="stack-item"
                key={technology.id}
              >

                <div className="stack-item-info">

                  <div className="stack-item-icon">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                    />
                  </div>

                  <div className="stack-item-details">

                    <h3>
                      {technology.name}
                    </h3>

                    <span>
                      {technology.category}
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  className="remove-stack-item"
                  aria-label={`Remove ${technology.name}`}
                  onClick={() => onRemove(technology.id)}
                >
                  ×
                </button>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* Remove All */}
      <button
        type="button"
        className="remove-all-btn"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
      >
        Remove All
      </button>

    </aside>
  );
};

export default YourStack;