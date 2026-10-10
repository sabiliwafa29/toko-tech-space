"use client";

class SpaceAudioEngine {
  private ctx: AudioContext | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public toggle(): boolean {
    this.initContext();
    if (!this.ctx) return false;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (this.isPlaying || !this.ctx) return;

    try {
      // Primary cosmic drone oscillator (55Hz sub-bass A1)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = "sine";
      this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime);

      // Secondary harmonizing harmonic oscillator (110Hz + subtle detune)
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = "triangle";
      this.osc2.frequency.setValueAtTime(110.5, this.ctx.currentTime);

      // Lowpass resonant filter for celestial space rumble
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(160, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(3, this.ctx.currentTime);

      // Master ambient gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 2.5);

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
      this.isPlaying = true;
    } catch (e) {
      console.warn("Space audio initialization error:", e);
    }
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.gainNode) return;

    try {
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      setTimeout(() => {
        this.osc1?.stop();
        this.osc2?.stop();
        this.osc1?.disconnect();
        this.osc2?.disconnect();
        this.filter?.disconnect();
        this.gainNode?.disconnect();
        this.isPlaying = false;
      }, 1300);
    } catch {
      this.isPlaying = false;
    }
  }

  public playWarpFx() {
    this.initContext();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    try {
      const warpOsc = this.ctx.createOscillator();
      const warpGain = this.ctx.createGain();
      const warpFilter = this.ctx.createBiquadFilter();

      warpOsc.type = "sawtooth";
      warpOsc.frequency.setValueAtTime(80, this.ctx.currentTime);
      warpOsc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.9);

      warpFilter.type = "bandpass";
      warpFilter.frequency.setValueAtTime(300, this.ctx.currentTime);
      warpFilter.frequency.exponentialRampToValueAtTime(3500, this.ctx.currentTime + 0.9);

      warpGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      warpGain.gain.exponentialRampToValueAtTime(0.09, this.ctx.currentTime + 0.4);
      warpGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      warpOsc.connect(warpFilter);
      warpFilter.connect(warpGain);
      warpGain.connect(this.ctx.destination);

      warpOsc.start();
      warpOsc.stop(this.ctx.currentTime + 1.2);
    } catch {}
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const spaceAudio = new SpaceAudioEngine();
