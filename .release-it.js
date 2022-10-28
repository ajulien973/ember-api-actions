module.exports = {
  plugins: {
    '@release-it-plugins/lerna-changelog': {
      infile: 'CHANGELOG.md',
      launchEditor: true,
    },
  },
  git: {
    commitMessage: 'v${version}',
    tagName: 'v${version}',
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    tokenRef: 'GITHUB_AUTH',
  },
  npm: {
    publish: false,
  },
};
