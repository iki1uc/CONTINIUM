NC.ARC = {
  ROLE: "Übergang",
  LINK: "PYRAMIDE → WÜRFEL",
  FLOW: "SYN → QUANT",

  ANGLES: {
    SYN: 90,
    QUANT: 120
  },

  TRANSFER: (SYN - QUANT),

  TARGET: φ,          // 1.618
  MODE: "arc.vay",

  SELF_PROTECT: true, // schützt sich selbst
  KEYLESS: true        // keine Keys mehr nötig
}
