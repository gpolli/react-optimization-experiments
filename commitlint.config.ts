import { defineConfig } from 'czg'

export default defineConfig({
  extends: ['@commitlint/config-conventional'],
  prompt: {
    // ----- behaviour -----
    useEmoji: true,
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    markBreakingChangeMode: true,
    breaklineChar: '|',
    skipQuestions: [],
    confirmColorize: true,

    // ----- issue handling -----
    issuePrefixes: [{ value: 'closes', name: 'closes: ISSUES has been processed' }],
    customIssuePrefixAlign: 'top',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,

    // ----- prompt messages -----
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect: 'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefix: 'Input ISSUES prefix:',
      footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },

    // ----- commit types -----
    types: [
      { value: 'feat', name: 'feat:       A new feature', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:        A bug fix', emoji: ':bug:' },
      { value: 'docs', name: 'docs:       Documentation only changes', emoji: ':memo:' },
      {
        value: 'style',
        name: 'style:      Changes that do not affect the meaning of the code',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor:   A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:',
      },
      {
        value: 'perf',
        name: 'perf:       A code change that improves performance',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:       Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:      Changes that affect the build system or external deps',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:         Changes to CI configuration files and scripts',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'chore',
        name: 'chore:      Other changes that do not modify src or test files',
        emoji: ':hammer:',
      },
      { value: 'revert', name: 'revert:     Reverts a previous commit', emoji: ':rewind:' },
    ],

    // ----- project scopes -----
    scopes: [
      { value: 'app', name: 'app:          Next.js app directory (layouts, pages, providers)' },
      { value: 'experiments', name: 'experiments:  Experiment modules' },
      { value: 'components', name: 'components:   Shared/common components' },
      { value: 'hooks', name: 'hooks:        Custom React hooks' },
      { value: 'contexts', name: 'contexts:     React context definitions' },
      { value: 'lib', name: 'lib:          Library utilities (query client, providers, utils)' },
      { value: 'graphql', name: 'graphql:      GraphQL queries, mutations, codegen' },
      { value: 'storybook', name: 'storybook:    Storybook stories and configuration' },
      { value: 'ci', name: 'ci:           CI/CD pipeline configuration' },
      { value: 'deps', name: 'deps:         Dependency updates' },
      { value: 'config', name: 'config:       Project-level configuration files' },
    ],
  },
})
