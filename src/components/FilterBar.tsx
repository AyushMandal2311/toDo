import styles from '../styles/FilterBar.module.css';

export type FilterType = 'all' | 'active' | 'completed';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
  activeCount: number;
  hasCompleted: boolean;
}

export const FilterBar = ({
  currentFilter,
  onFilterChange,
  onClearCompleted,
  activeCount,
  hasCompleted,
}: FilterBarProps) => {
  return (
    <div className={styles.bar}>
      <span className={styles.count}>
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>
      
      <div className={styles.filters}>
        {(['all', 'active', 'completed'] as FilterType[]).map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`${styles.filterBtn} ${
              currentFilter === filter ? styles.active : ''
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {hasCompleted && (
        <button onClick={onClearCompleted} className={styles.clearBtn}>
          Clear Completed
        </button>
      )}
    </div>
  );
};
