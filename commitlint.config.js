/**
 *
 * Commit Messages Convention
 *
 * build: Changes made to the build systems or external dependencies
 * ci: Updating configuration files for continuous integration and deployment services
 * chore: Updating tasks for automation tools such as Grunt, etc., with no changes to production code
 * docs: Changes made to documentation only
 * feat: Addition of a new feature
 * fix: Correction of a bug
 * perf: Changes made to improve performance
 * refactor: Changes made to the code structure without fixing a bug or adding a feature
 * style: Changes made to the code's formatting, white-space, and other stylistic elements, without affecting its meaning
 * test: Addition of missing tests or correction of existing tests.
 *
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset'
      ]
    ]
  }
};
