tailwind.config = {
    theme: {
      extend: {
        colors: {
          navbg: '#0D0D0D',
          black: '#1C1D28',
          primary: '#FFD2A4',
          sub_headline: '#161722',
          service_item_bg: '#FFF5EB',
        },
        maxWidth: {
          'container': '1280px',
        },
        fontFamily: {
          'roboto': "'Roboto Condensed', sans-serif",
      },
      backgroundImage: {
        'banner': "url('./images/banner.jpg')",
      },
      letterSpacing: {
        heading: '-0.64px',
        item_heading: '-0.32px',
      }
    }
  }
}