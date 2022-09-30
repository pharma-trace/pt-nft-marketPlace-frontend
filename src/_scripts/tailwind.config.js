tailwind.config = {
    theme: {
        extend: {
            colors: {
                nft_institutional: '#F0CE14',
                nft_institutional_dark: '#E3C20D',
                pt_institutional: '#0BA4EB',
                light_mode: '#FFFFFF',
                dark_mode: '#202225',
                sub_dark_mode: '#2F3031',
                sub_dark_boder: '#48494B',
                gray: {
                    300: '#BCBCBC',
                    200: '#E8E8E8',
                    100: '#EFEFEF',
                },
                success: '#1FD379',
                waiting: '#FAAD00',
                error: '#C92727'
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'] // 300:Light, 400:Regular, 500:Medium, 600:SemiBold, 700:Bold
            },
            fontSize: {
              'xl': '1.25rem',
              '2xl': '1.563rem',
              '3xl': '1.75rem',
              '4xl': '2.375rem',
              '5xl': '3rem',
              '6xl': '3.5rem',
              '7xl': '4rem',
              'big': '9rem'
            },
            lineHeight: {
              '11': '2.75rem',
              '12': '3rem'
            },
            listStyleType: {
                'circle': 'circle'
            }
        },
    }
}
