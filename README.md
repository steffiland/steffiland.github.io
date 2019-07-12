# SteffiLand Blog

this is the official repo for my private blog, hosted with GH Pages, using the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes).

## How to clone this repo
This repo contains submodules. So, the correct way to clone and initialize a local working copy, you have to:
* clone this repo
* cd into the working copy
* `git submodule init`
* `git submodule update`

## Updating submodules
* ... does not seem to work automagically (not as stated in https://help.github.com/en/articles/using-submodules-with-pages)
* `git submodule update` does not seem to work, too.
* but `cd` into the submodules directory, then `git pull`, `cd`ing back to this repos root, then `git commit -m 'updating a submodule' -a; git push` seems to work.

## removing submodules from the repo
* `git submodule deinit <path_to_submodule>`
* `git rm <path_to_submodule>`
* `git commit-m "Removed submodule "`
* `rm -rf .git/modules/<path_to_submodule>`

## Useful Links
- [configure MMistakes Jekyll theme ](https://mmistakes.github.io/minimal-mistakes/docs/configuration/).
- [Ruby 101](https://jekyllrb.com/docs/ruby-101/)
- [Setting up a Jekyll site with GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Configuring GitHub Metadata](https://github.com/jekyll/github-metadata/blob/master/docs/configuration.md#configuration) to work properly when developing locally and avoid `No GitHub API authentication could be found. Some fields may be missing or have incorrect data.` warnings.
