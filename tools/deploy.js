import push from 'git-push';

const remote = {
  name: 'production',
  url: 'http://github.com/user/test.example.com',
  branch: 'gh-pages'
};

export default async () => {
  await build();
  await new Promise(resolve => push('./build', remote, resolve));
});