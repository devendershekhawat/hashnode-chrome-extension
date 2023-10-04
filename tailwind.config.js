const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            color: '#111',
            a: {
              color: '#111',
              '&.user-mention': {
                textDecoration: 'none',
                color: '#2962ff',
              },
            },
            'div[data-node-type="callout"]': {
              display: 'flex',
              'justify-content': 'flex-start',
              'align-items': 'flex-start',
              'background-color': '#F8FAFC',
              border: '1px solid #E2E8F0',
              padding: ' 1rem 1.5rem',
              gap: '0.5rem',
              'border-radius': '0.5rem',
              margin: '1rem 0',
              'word-break': 'break-word',
            },
            'div[data-node-type="callout-emoji"]': {
              background: '#E2E8F0',
              'border-radius': '0.5rem',
              minWidth: '1.75rem',
              width: '1.75rem',
              height: '1.5rem',
              display: 'flex',
              'margin-top': '0.3rem',
              'justify-content': 'center',
              'align-items': 'center',
              'font-size': '1rem',
            },
            'li p': {
              margin: '0px',
            },
            blockquote: {
              borderColor: '#e2e8f0',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
            details: {
              border: 'none',
              borderRadius: '4px',
              padding: '.5em 3em 0',
            },
            'details > :not(summary)': {
              padding: '0.5em 0 0.5em 1em',
              position: 'relative',
              fontSize: '1.125rem',
              margin: '0',
            },
            'details > :not(summary)::before': {
              position: 'absolute',
              left: '0.3em',
              top: '0',
              content: '""',
              border: '1px solid #cbd5e1',
              borderRadius: '4px',
              width: '1px',
              height: '100%',
            },
            summary: {
              fontSize: '1.125rem',
              fontWeight: 'bold',
              margin: '0',
              marginBottom: '0.5rem',
            },
            kbd: {
              backgroundColor: '#eee',
              borderRadius: '3px',
              border: '1px solid #b4b4b4',
              boxShadow: '0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset',
              color: '#333',
              display: 'inline-block',
              fontSize: '.85em',
              fontWeight: '700',
              lineWeight: '1',
              padding: '2px 4px',
              whiteSpace: 'nowrap',
            },
            abbr: {
              fontStyle: 'italic',
            },
            dt: {
              fontWeight: 'bold',
            },
            dd: {
              marginBottom: '1rem',
              marginInlineStart: '1rem',
            },
            code: {
              '&::after': {
                display: 'none',
              },
              '&::before': {
                display: 'none',
              },
            },
            h1: {
              fontFamily: `${['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]}`,
            },
            h2: {
              fontFamily: `${['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]}`,
            },
            h3: {
              fontFamily: `${['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]}`,
            },
            h4: {
              fontFamily: `${['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]}`,
            },
            h5: {
              fontFamily: `${['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]}`,
            },
            h6: {
              fontFamily: `${['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]}`,
            },
            td: {
              border: '1px solid rgb(226 232 240 / 80%)',
            },
            th: {
              border: '1px solid rgb(226 232 240 / 80%)',
            },
            pre: {
              backgroundColor: '#0f172a',
            },
            thead: {
              fontWeight: 600,
            },
          },
        },
        dark: {
          css: {
            color: '#fafafa',
            a: {
              color: '#fafafa',
            },
            'div[data-node-type="callout"]': {
              'background-color': '#1E293B',
              border: '1px solid #334155',
            },
            'div[data-node-type="callout-emoji"]': {
              background: '#475569',
            },
            'details > :not(summary)::before': {
              border: '1px solid #334155',
            },
            kbd: {
              backgroundColor: '#444',
              border: '1px solid #757575',
              color: '#FFF',
            },
            strong: {
              color: '#fafafa',
            },
            'ol > li::before': {
              color: '#bdbdbd',
            },
            blockquote: {
              borderColor: '#334155',
              color: '#f8fafc',
            },
            h1: {
              color: '#fafafa',
            },
            h2: {
              color: '#fafafa',
            },
            h3: {
              color: '#fafafa',
            },
            h4: {
              color: '#fafafa',
            },
            'figure figcaption': {
              color: '#bdbdbd',
            },
            code: {
              color: '#fafafa',
              backgroundColor: '#1f2937',
            },
            'a code': {
              color: '#fafafa',
            },
            pre: {
              color: '#fafafa',
              backgroundColor: '#1e293b',
            },
            'pre code': {
              color: '#fafafa',
              backgroundColor: 'transparent',
            },
            thead: {
              color: '#fafafa',
            },
            td: {
              border: '1px solid #1E293B',
            },
            th: {
              border: '1px solid #1E293B',
            },
            'li p': {
              margin: '0px',
            },
          },
        },
        /* TODO: Only for comments in Main. Handle this in a better way. We should ideally only have one prose-dark variant. But editor uses different colors as of now */
        'dark-comment': {
          css: {
            color: colors.slate[300],
            a: {
              color: colors.slate[300],
            },
            'div[data-node-type="callout"]': {
              'background-color': '#1E293B',
              border: '1px solid #334155',
            },
            'div[data-node-type="callout-emoji"]': {
              background: '#475569',
            },
            'details > :not(summary)::before': {
              border: '1px solid #334155',
            },
            kbd: {
              backgroundColor: '#444',
              border: '1px solid #757575',
              color: '#FFF',
            },
            strong: {
              color: colors.slate[300],
            },
            'ol > li::before': {
              color: '#bdbdbd',
            },
            blockquote: {
              borderColor: '#334155',
              color: '#f8fafc',
            },
            h1: {
              color: colors.slate[300],
            },
            h2: {
              color: colors.slate[300],
            },
            h3: {
              color: colors.slate[300],
            },
            h4: {
              color: colors.slate[300],
            },
            'figure figcaption': {
              color: '#bdbdbd',
            },
            code: {
              color: colors.slate[300],
              backgroundColor: '#1f2937',
            },
            'a code': {
              color: colors.slate[300],
            },
            pre: {
              color: colors.slate[300],
              backgroundColor: '#1e293b',
            },
            'pre code': {
              color: colors.slate[300],
              backgroundColor: 'transparent',
            },
            thead: {
              color: colors.slate[300],
            },
            td: {
              border: '1px solid #1E293B',
            },
            th: {
              border: '1px solid #1E293B',
            },
            'li p': {
              margin: '0px',
            },
          },
        },
        sm: {
          css: {
            '> ul > li > *:first-child': {
              marginTop: '0px',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0px',
            },
            '> ol > li > *:first-child': {
              marginTop: '0px',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0px',
            },
            'li p': {
              margin: '0px',
            },
          },
        },
        md: {
          css: {
            '> ul > li > *:first-child': {
              marginTop: '0px',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0px',
            },
            '> ol > li > *:first-child': {
              marginTop: '0px',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0px',
            },
            'li p': {
              margin: '0px',
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontSize: '1.8em',
              lineHeight: '1.2',
            },
            '> ul > li > *:first-child': {
              marginTop: '0px',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0px',
            },
            '> ol > li > *:first-child': {
              marginTop: '0px',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0px',
            },
            'li p': {
              margin: '0px',
            },
          },
        },
        xl: {
          css: {
            h1: {
              fontSize: '2em',
              lineHeight: '1.2',
            },
            '> ul > li > *:first-child': {
              marginTop: '0px',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0px',
            },
            '> ol > li > *:first-child': {
              marginTop: '0px',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0px',
            },
            'li p': {
              margin: '0px',
            },
            'details > :not(summary)': {
              margin: 0,
            },
          },
        },
        '2xl': {
          css: {
            'li p': {
              margin: '0px',
            },
          },
        },
      }),
      borderColor: {
        DEFAULT: 'rgb(226 232 240 / 80%)',
      },
      colors: {
        current: 'currentColor',
        twitter: '#1da1f2',
        'twt-variant': '#1da1f2',
        facebook: '#3b5998',
        'fb-variant': '#3578EA',
        'msngr-variant': '#0084ff',
        github: '#333',
        'gh-variant': '#333',
        'wap-variant': '#128c7e',
        linkedin: '#3867AD',
        'discd-variant': '#7289da',
        'lnkin-variant': '#0077b5',
        'rdit-variant': '#ff4500',
        'hckr-variant': '#ff4500',
        instagram: '#e1306c',
        'inst-variant': '#e1306c',
        gold: '#D99E32',
        'team-editor': '#58bac8',
        'team-contributor': '#d9a339',
        // TODO: Remove 950 shades once tailwindcss is updated to 3.3 and above
        'slate-950': '#020617',
        'red-950': '#450a0a',
        'orange-950': '#431407',
        'blue-950': '#172554',
      }
    },
  },
  plugins: [],
}
