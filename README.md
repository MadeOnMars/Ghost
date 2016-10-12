<a href="https://github.com/TryGhost/Ghost"><img src="https://cloud.githubusercontent.com/assets/120485/6622822/c4c639fe-c8e7-11e4-9e64-5bec06c8b4c3.png" alt="Ghost" /></a>

# i18n flavour

We love **Ghost** but it lacks the multiple languages support. We are [Made On Mars](https://www.made-on-mars.com), a French digital agency and we wanted to be able to blog in French or in English. So we forked the Ghost LTS released (0.11.1) and added the internationalization support. We are using it in production for our [blog](https://www.made-on-mars.com/blog).

For more information about normal Ghost please follow the links below :

- [Ghost.org](https://ghost.org)
- [Github repo](https://github.com/TryGhost/Ghost)

# Install (from git)

Install Node.js. (See [Supported Node.js versions](http://support.ghost.org/supported-node-versions/))

```bash
# Node v4.2+ LTS - recommended
# Node v0.10.x and v0.12.x - supported
#
# Choose wisely
```

Clone :ghost:

```bash
git clone https://github.com/MadeOnMars/Ghost.git
cd ghost
```

Install grunt. No prizes here.

```bash
npm install -g grunt-cli
```

```bash
npm install
```

Build the things and see!

```bash
grunt dev
```

# Copyright & License

Copyright (c) 2013-2016 Ghost Foundation - Released under the [MIT license](LICENSE).
