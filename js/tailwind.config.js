tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          navbg:'#0D0D0D',
          primary:'#FFD2A4',
          navbtn:'#1C1D28',
          subheadline:'#161722',
          serviceitem:'#FFF5EB',
          watchbg:'#F5F2F0',
          textgradient:'#DC9853'
          
        },
        maxWidth: {
            'container': '1280px',
          },
          fontFamily: {
           robotocondensed:"Roboto Condensed, sans-serif"
          },
          backgroundImage: {
            'banner': "url('images/banner.jpg')",
            overlay:'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
            'visitbg':"url('images/visit.jpg')",
          },
          fontSize: {
            bannerheading: '64px',
          }
      }
    }
  }