export const photoBoothStore = {
  defaults: {
    layout: '2x1',
    countdown: 3,
    caption: 'Special Moment',
    background: 'white'
  },

  getSettings() {
    if (typeof window === 'undefined') return this.defaults;

    const stored = localStorage.getItem('photoBoothSettings');
    if (stored) {
      return JSON.parse(stored);
    }
    return this.defaults;
  },

  saveSettings(settings) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('photoBoothSettings', JSON.stringify(settings));
  },

  resetSettings() {
    if (typeof window === 'undefined') return;
    localStorage.setItem('photoBoothSettings', JSON.stringify(this.defaults));
  },

  getLayoutInfo(layout) {
    const layouts = {
      '2x1': {
        count: 2,
        cols: 2,
        rows: 1,
        label: '2 Photos (2x1)'
      },
      '3x1': {
        count: 3,
        cols: 3,
        rows: 1,
        label: '3 Photos (3x1)'
      },
      '2x2': {
        count: 4,
        cols: 2,
        rows: 2,
        label: '4 Photos (2x2)'
      }
    };
    return layouts[layout] || layouts['2x1'];
  },

  savePhotos(photos) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('capturedPhotos', JSON.stringify(photos));
  },

  getPhotos() {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('capturedPhotos');
    return stored ? JSON.parse(stored) : [];
  },

  clearPhotos() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('capturedPhotos');
  }
};