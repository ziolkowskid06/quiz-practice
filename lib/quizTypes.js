export const TYPE_LABELS = {
  'true-false': 'True or False',
  'multiple-choice': 'Multiple Choice',
  'select-all': 'Select All That Apply',
  'fill-blank': 'Fill in the Blank',
  'matching': 'Matching',
};

export const TYPE_ICONS = {
  'true-false': '⚡',
  'multiple-choice': '🎯',
  'select-all': '📋',
  'fill-blank': '✏️',
  'matching': '🔗',
};

// Pastel dark-mode accent per type — used in TypeList tiles and option highlights
export const TYPE_COLORS = {
  'true-false':      { border: 'border-rose-500/40',    bg: 'bg-rose-950/30',    text: 'text-rose-300',    hover: 'hover:border-rose-400/60 hover:bg-rose-950/50' },
  'multiple-choice': { border: 'border-violet-500/40',  bg: 'bg-violet-950/30',  text: 'text-violet-300',  hover: 'hover:border-violet-400/60 hover:bg-violet-950/50' },
  'select-all':      { border: 'border-sky-500/40',     bg: 'bg-sky-950/30',     text: 'text-sky-300',     hover: 'hover:border-sky-400/60 hover:bg-sky-950/50' },
  'fill-blank':      { border: 'border-emerald-500/40', bg: 'bg-emerald-950/30', text: 'text-emerald-300', hover: 'hover:border-emerald-400/60 hover:bg-emerald-950/50' },
  'matching':        { border: 'border-amber-500/40',   bg: 'bg-amber-950/30',   text: 'text-amber-300',   hover: 'hover:border-amber-400/60 hover:bg-amber-950/50' },
};
