var soundConfig = {
  time_period: 100,
  input: {
    voices: 1,
    use_polling: true,
    fixed: null,
  },
  output: {
    voices: 1,
    use_polling: true,
    fixed: null,
  },
  backend: {
    PulseAudio: {
      buffer_samples: 4096
    }
  }
};

module.exports = soundConfig;
