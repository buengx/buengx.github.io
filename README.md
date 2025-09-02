# Buengx Personal Website

A modern Jekyll-powered personal website and blog hosted on GitHub Pages.

## ✨ Features

- **Jekyll-powered blog** with Markdown support
- **Responsive design** that looks great on all devices
- **SEO optimized** with Jekyll SEO Tag
- **RSS feed** for blog subscribers
- **GitHub repositories integration** with live API
- **Clean, modern design** with purple gradient styling
- **Fast loading** static site generation

## 🚀 Getting Started

### Prerequisites

- Ruby 3.0 or higher
- Bundler gem

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/buengx/buengx.github.io.git
   cd buengx.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

### Writing Blog Posts

Create new blog posts in the `_posts` directory using the following naming convention:
```
YYYY-MM-DD-title-of-post.md
```

Example front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: 2024-09-02 12:00:00 -0000
categories: [category1, category2]
tags: [tag1, tag2, tag3]
author: "Your Name"
description: "Brief description of your post"
---

Your content here...
```

## 📁 Site Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/             # HTML templates
│   ├── default.html      # Main site layout
│   └── post.html         # Blog post layout
├── _posts/               # Blog posts
├── _sass/                # Sass stylesheets
│   ├── _main.scss        # Main styles
│   └── _blog.scss        # Blog-specific styles
├── assets/
│   ├── css/
│   │   └── styles.scss   # Main stylesheet
│   └── js/
│       └── main.js       # JavaScript functionality
├── blog/                 # Blog index page
├── index.html            # Homepage
├── Gemfile              # Ruby dependencies
└── .gitignore           # Git ignore rules
```

## 🎨 Customization

### Colors and Styling

The site uses a purple gradient theme defined in `_sass/_main.scss`. Key color variables:
- Primary gradient: `#667eea` to `#764ba2`
- Background: `#f8f9fa`
- Text: `#333`

### Navigation

Update the navigation in `_layouts/default.html` to add or modify menu items.

### Site Configuration

Modify `_config.yml` to update:
- Site title and description
- Author information
- Social links
- Jekyll plugins

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. No additional configuration is needed.

The live site is available at: [https://buengx.github.io](https://buengx.github.io)

## 🛠️ Built With

- **Jekyll 4.4+** - Static site generator
- **GitHub Pages** - Hosting and deployment
- **Sass/SCSS** - CSS preprocessing
- **Liquid** - Templating engine
- **Markdown** - Content authoring
- **Jekyll Plugins**:
  - jekyll-feed (RSS feeds)
  - jekyll-sitemap (XML sitemaps)
  - jekyll-seo-tag (SEO optimization)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

---

⭐ **Star this repository if you found it helpful!**