import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Load Yandex Maps script
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Create a container for the map if it doesn't exist
    const createMapContainer = () => {
      const mapContainer = document.querySelector('.yandex-map-container');
      if (mapContainer) {
        // Create iframe for the map
        const iframe = document.createElement('iframe');
        iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A93357cb578030166e7f5c88bb4411938314c8eb1c2c919b8fb969633829a9e56&amp;source=constructor';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.style.borderRadius = '0.5rem';
        iframe.title = 'BilimCert Location Map';
        iframe.allow = 'geolocation';

        // Clear container and append iframe
        mapContainer.innerHTML = '';
        mapContainer.appendChild(iframe);

        // Set loaded state
        setMapLoaded(true);
      }
    };

    // Create map after a short delay to ensure container is ready
    const timer = setTimeout(() => {
      createMapContainer();
    }, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <footer className="w-full border-t bg-gradient-to-r from-[#002244] to-[#003366] text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwaC02VjBoNnYzMHptLTYgMGgtNlYwaDZ2MzB6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="container mx-auto py-12 md:py-16 px-4 md:px-6 mlg:px-8 relative z-10 max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative h-12 w-auto md:h-10 overflow-hidden">
                <img
                  src="/logo1.png"
                  alt="BilimCert Logo"
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = "h-10 w-10 md:h-8 md:w-8 rounded-full bg-white flex items-center justify-center";
                    fallback.innerHTML = '<span class="text-[#003366] font-bold text-lg md:text-base">B</span>';
                    e.currentTarget.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
              <span className="text-2xl md:text-xl font-bold">BilimCert</span>
            </Link>
            <p className="text-white/80 mb-6 text-base md:text-sm">
              <TranslatedText textKey="footer.description" />
            </p>
            <div className="flex space-x-6 md:space-x-4">
              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 md:p-2 hover:bg-[#FF6600]/70 transition-colors min-h-[48px] min-w-[48px] md:min-h-[44px] md:min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 md:p-2 hover:bg-[#FF6600]/70 transition-colors min-h-[48px] min-w-[48px] md:min-h-[44px] md:min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-lg font-semibold mb-6">
              <TranslatedText textKey="footer.quickLinks" />
            </h3>
            <ul className="space-y-4 md:space-y-3">
              <li>
                <Link
                  href="/recognition"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.recognition" />
                </Link>
              </li>
              <li>
                <Link
                  href="/accreditation"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.accreditation" />
                </Link>
              </li>
              <li>
                <Link
                  href="/bologna-process"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.bolognaProcess" />
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.news" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.contacts" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-lg font-semibold mb-6">
              <TranslatedText textKey="footer.aboutCenter" />
            </h3>
            <ul className="space-y-4 md:space-y-3">
              <li>
                <Link
                  href="/about/center"
                  className="text-white/80 hover:text-white transition-colors flex items-center py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px]"
                >
                  <TranslatedText textKey="footer.aboutCenter" />
                </Link>
              </li>

              <li>
                <Link
                  href="/employers"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.careers" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.privacyPolicy" />
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility-settings"
                  className="text-white/80 hover:text-white transition-colors block py-2 md:py-1 text-base md:text-sm min-h-[48px] md:min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="footer.accessibility" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-lg font-semibold mb-6">
              <TranslatedText textKey="footer.contactUs" />
            </h3>
            <address className="not-italic text-white/80 space-y-4 md:space-y-3 text-base md:text-sm">
              <p><TranslatedText textKey="footer.address.line1" /></p>
              <p><TranslatedText textKey="footer.address.line2" /></p>
              <p><TranslatedText textKey="footer.address.line3" /></p>
              <p className="mt-4">
                <a
                  href="mailto:info@bilimcert.kz"
                  className="hover:text-white transition-colors flex items-center min-h-[48px] md:min-h-[44px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-4 md:w-4 mr-3 md:mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  info@bilimcert.kz
                </a>
              </p>
              <p>
                <a
                  href="tel:+77771234567"
                  className="hover:text-white transition-colors flex items-center min-h-[48px] md:min-h-[44px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-4 md:w-4 mr-3 md:mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +7 (777) 123-4567
                </a>
              </p>
            </address>

            {/* Yandex Maps */}
            <div className="mt-6 md:mt-8">
              <h4 className="text-lg md:text-base font-semibold mb-4">
                <TranslatedText textKey="footer.findUs" defaultText="Find Us" />
              </h4>
              <div
                className="w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden border border-white/20 shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  position: 'relative'
                }}
              >
                {/* Map container */}
                <div
                  id="yandex-map"
                  className="w-full h-full"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.5rem',
                    overflow: 'hidden'
                  }}
                >
                  {!mapLoaded && (
                    <div className="w-full h-full flex items-center justify-center bg-[#003366]/50">
                      <div className="text-white/80 text-sm">
                        <svg className="animate-spin h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <TranslatedText textKey="footer.loadingMap" defaultText="Loading map..." />
                      </div>
                    </div>
                  )}
                  <div
                    className="yandex-map-container"
                    style={{
                      width: '100%',
                      height: '100%',
                      visibility: mapLoaded ? 'visible' : 'hidden'
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Accessibility Version Link */}
            <div className="mt-8 md:mt-6 pt-5 md:pt-4 border-t border-white/20">
              <Link
                href="/accessibility-settings"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors min-h-[48px] md:min-h-[44px] text-base md:text-sm"
                aria-label="Accessibility version for visually impaired users"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5 mr-3 md:mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
                <TranslatedText textKey="footer.accessibilityVersion" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-base md:text-sm">
            © {currentYear} BilimCert. <TranslatedText textKey="footer.rights" />
          </p>
          <div className="flex flex-wrap gap-6 md:gap-4 mt-6 md:mt-0 justify-center">
            <Link
              href="/privacy-policy"
              className="text-base md:text-sm text-white/60 hover:text-white transition-colors min-h-[48px] md:min-h-[44px] flex items-center"
            >
              <TranslatedText textKey="footer.privacyPolicy" />
            </Link>
            <Link
              href="/terms"
              className="text-base md:text-sm text-white/60 hover:text-white transition-colors min-h-[48px] md:min-h-[44px] flex items-center"
            >
              <TranslatedText textKey="footer.terms" />
            </Link>
            <Link
              href="/accessibility-settings"
              className="text-base md:text-sm text-white/60 hover:text-white transition-colors min-h-[48px] md:min-h-[44px] flex items-center"
            >
              <TranslatedText textKey="footer.accessibility" />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
