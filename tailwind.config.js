tailwind.config = {
    theme: {
      extend: {
        colors: {
          navbg: '#0D0D0D',
          black: '#1C1D28',
          primary: '#FFD2A4',
          sub_headline: '#161722',
          service_item_bg: '#FFF5EB',
          btn_hover: '#573d53',
        },
        maxWidth: {
          'container': '1280px',
        },
        fontFamily: {
          'roboto': "'Roboto Condensed', sans-serif",
      },
      backgroundImage: {
        'banner': "url('./images/banner.jpg')",
        'overlay': "linear-gradient(12deg, #060606 56.68%, rgba(0, 0, 0, 0.02) 96.44%)"
      },
      letterSpacing: {
        heading: '-0.64px',
        item_heading: '-0.32px',
      }
    }
  }
}