import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsAndroidstudio: CreateThemeOptions['settings'] = {
  background: '#0f202d',
  foreground: '#f52891cc',
  caret: '#5d00ff',
  selection: '#036dd626',
  selectionMatch: '#036dd626',
  lineHighlight: '#8a91991a',
  gutterBackground: '#0f202d',
  gutterForeground: '#8a919966',
};

export const createNewTheme = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsAndroidstudio,
      ...settings,
    },
    styles: [
      { tag: t.comment, color: '#787b8099' },
      { tag: t.variableName, color: '#0080ff' },
      { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
      { tag: t.number, color: '#5c6166' },
      { tag: t.bool, color: '#5c6166' },
      { tag: t.null, color: '#5c6166' },
      { tag: t.keyword, color: '#5c6166' },
      { tag: t.operator, color: '#5c6166' },
      { tag: t.className, color: '#5c6166' },
      { tag: t.definition(t.typeName), color: '#5c6166' },
      { tag: t.typeName, color: '#5c6166' },
      { tag: t.angleBracket, color: '#5c6166' },
      { tag: t.tagName, color: '#5c6166' },
      { tag: t.attributeName, color: '#5c6166' },
      ...styles,
    ],
  });
};

export default createNewTheme;
