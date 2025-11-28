// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Buengx personal site loaded successfully!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector('.hero .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Simple animation for elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content sections for animation
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Load GitHub repositories
    loadGitHubRepositories();
});

// GitHub Repository functionality
async function loadGitHubRepositories() {
    const username = 'buengx';
    const loadingElement = document.getElementById('repositories-loading');
    const errorElement = document.getElementById('repositories-error');
    const listElement = document.getElementById('repositories-list');
    
    try {
        console.log('Fetching GitHub repositories...');
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repositories = await response.json();
        console.log(`Loaded ${repositories.length} repositories`);
        
        // Hide loading state
        loadingElement.style.display = 'none';
        
        // Show repositories
        if (repositories.length > 0) {
            displayRepositories(repositories);
            listElement.style.display = 'grid';
        } else {
            errorElement.querySelector('p').textContent = 'No public repositories found.';
            errorElement.style.display = 'block';
        }
        
    } catch (error) {
        console.error('Error loading repositories:', error);
        console.log('Falling back to demo repositories...');
        
        // Fallback to demo data for testing/demo purposes
        const demoRepositories = [
            {
                name: 'buengx.github.io',
                description: 'Personal GitHub Pages website built with HTML, CSS, and JavaScript',
                html_url: 'https://github.com/buengx/buengx.github.io',
                language: 'HTML',
                stargazers_count: 1,
                forks_count: 0,
                updated_at: '2024-01-15T10:30:00Z',
                private: false,
                fork: false
            },
            {
                name: 'example-project',
                description: 'A sample JavaScript project showcasing modern web development practices',
                html_url: 'https://github.com/buengx/example-project',
                language: 'JavaScript',
                stargazers_count: 5,
                forks_count: 2,
                updated_at: '2024-01-10T08:15:00Z',
                private: false,
                fork: false
            },
            {
                name: 'python-scripts',
                description: 'Collection of useful Python automation scripts',
                html_url: 'https://github.com/buengx/python-scripts',
                language: 'Python',
                stargazers_count: 3,
                forks_count: 1,
                updated_at: '2024-01-05T14:20:00Z',
                private: false,
                fork: false
            }
        ];
        
        loadingElement.style.display = 'none';
        displayRepositories(demoRepositories);
        listElement.style.display = 'grid';
        
        // Show a note about using demo data
        const noteElement = document.createElement('p');
        noteElement.style.cssText = 'text-align: center; color: #586069; font-style: italic; margin-top: 1rem;';
        noteElement.textContent = '* Demo repositories shown (GitHub API may be unavailable)';
        listElement.parentElement.appendChild(noteElement);
    }
}

function displayRepositories(repositories) {
    const listElement = document.getElementById('repositories-list');
    
    // Filter out forked repositories and sort by stars and recent activity
    const filteredRepos = repositories
        .filter(repo => !repo.fork)
        .sort((a, b) => {
            // Sort by stars first, then by updated date
            if (b.stargazers_count !== a.stargazers_count) {
                return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
    
    listElement.innerHTML = filteredRepos.map(repo => createRepositoryCard(repo)).join('');
}

function createRepositoryCard(repo) {
    const description = repo.description || 'No description available';
    const language = repo.language || null;
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const updatedAt = new Date(repo.updated_at).toLocaleDateString();
    
    const languageClass = language ? `lang-${language.toLowerCase()}` : 'lang-default';
    const languageDisplay = language || 'Unknown';
    
    return `
        <div class="repository-card">
            <div class="repository-header">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repository-name">
                    ${repo.name}
                </a>
                <span class="repository-visibility">${repo.private ? 'Private' : 'Public'}</span>
            </div>
            
            <p class="repository-description">${description}</p>
            
            <div class="repository-footer">
                ${language ? `
                    <div class="repository-language">
                        <span class="language-color ${languageClass}"></span>
                        <span>${languageDisplay}</span>
                    </div>
                ` : ''}
                
                <div class="repository-stats">
                    ${stars > 0 ? `
                        <div class="stat-item">
                            <span>⭐</span>
                            <span>${stars}</span>
                        </div>
                    ` : ''}
                    ${forks > 0 ? `
                        <div class="stat-item">
                            <span>🍴</span>
                            <span>${forks}</span>
                        </div>
                    ` : ''}
                    <div class="stat-item">
                        <span>Updated ${updatedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}