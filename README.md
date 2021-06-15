# Korean Messages for React-Admin

[![npm version](https://img.shields.io/npm/v/@say8425/ra-language-korean?color=cb3837&logo=npm)](https://www.npmjs.com/package/@say8425/ra-language-korean)
[![GitHub Actions Test](https://github.com/say8425/ra-language-korean/workflows/Test/badge.svg)](https://github.com/say8425/ra-language-korean/actions?query=workflow%3ATest)
[![GitHub Actions Release](https://github.com/say8425/ra-language-korean/workflows/Release/badge.svg)](https://github.com/say8425/ra-language-korean/actions?query=workflow%3ARelease)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/say8425/ra-language-korean/blob/master/LICENSE)

Korean messages for [react-admin](https://github.com/marmelab/react-admin).

react-admin 한국어 번역입니다.

기존 번역된 i18n 을 참고하여 최대한 매끄럽게 작성하였으며,<br>
어투 또한 통일하였습니다. 

번역 제안등은 [issue](https://github.com/say8425/ra-language-korean/issues) 로 남겨주십시오.

## Installation

### Yarn

```shell
yarn add @say8425/ra-language-korean
```

### NPM

```shell
npm install --save @say8425/ra-language-korean
```

## Usage

```typescript jsx
import koreanMessages from '@say8425/ra-language-korean';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    ko: koreanMessages
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'ko');

<Admin locale="ko" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

MIT License
