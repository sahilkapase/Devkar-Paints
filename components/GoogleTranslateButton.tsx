"use client";
import { useEffect, useState } from "react";

export function GoogleTranslateButton() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("google-translate-script")) return;
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      <button
        onClick={() => setShowTranslate((v) => !v)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#4285F4',
          color: 'white',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          fontSize: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
        }}
        aria-label="Translate"
        title="Translate"
      >
        <span style={{ fontWeight: 700 }}>A</span>
      </button>
      {showTranslate && (
        <div
          id="google_translate_element"
          style={{
            marginTop: 12,
            background: 'white',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            padding: 12,
            minWidth: 180,
          }}
        />
      )}
    </div>
  );
} 