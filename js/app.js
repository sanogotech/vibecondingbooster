// Initial data with a single pre-filled example
const initialData = {
    projects: {
        1: {
            id: 1,
            title: "Projet VibeCoding Example",
            client: "Acme Corp",
            startDate: "2023-05-01",
            endDate: "2023-07-15",
            description: "Ceci est un exemple complet de projet utilisant la méthode VibeCoding. Il couvre les phases de conception, développement backend, frontend, tests et déploiement.",
            status: "En cours",
            progress: 65,
            createdAt: "2023-04-20T10:00:00Z",
            updatedAt: new Date().toISOString(),
            teamMembers: ["Pierre Martin (Chef de projet)", "Marie Smith (Développeuse Backend)", "Jean Dupont (Développeur Fullstack)", "Alice Lambert (UX Designer)"],
            tasks: [
                { id: 1, title: "Implémenter le panier", description: "", priority: "Haute", dueDate: "2023-06-10", assignedTo: "Jean Dupont", checklistCategory: "Frontend", completed: true },
                { id: 2, title: "Configurer les paiements", description: "", priority: "Haute", dueDate: "2023-06-20", assignedTo: "Marie Smith", checklistCategory: "Backend", completed: false },
                { id: 3, title: "Tests utilisateurs", description: "", priority: "Haute", dueDate: "2023-06-25", assignedTo: "Alice Lambert", checklistCategory: "Tests", completed: false },
                { id: 4, title: "Documentation API", description: "", priority: "Basse", dueDate: "2023-06-30", assignedTo: "Pierre Martin", checklistCategory: "Documentation", completed: false },
                { id: 5, title: "Optimiser les performances", description: "", priority: "Moyenne", dueDate: "2023-06-28", assignedTo: "Jean Dupont", checklistCategory: "Backend", completed: false }
            ],
            checklists: {
                "Backend": [
                    { id: 1, title: "Génération entités JPA", completed: true },
                    { id: 2, title: "CRUD Spring Data REST", completed: true },
                    { id: 3, title: "Custom Handlers CRUD", completed: true },
                    { id: 4, title: "Tests backend + couverture", completed: false }
                ],
                "Frontend": [
                    { id: 5, title: "Page d'accueil attractive", completed: true },
                    { id: 6, title: "Page login simple & sécurisée", completed: true },
                    { id: 7, title: "Dashboard avec onglets", completed: false },
                    { id: 8, title: "Appels API via AngularJS", completed: false },
                    { id: 9, title: "Tests fonctionnels frontend", completed: false }
                ]
            },
            timeline: [
                { id: 1, title: "Rédaction cahier des charges", date: "2023-05-01", status: "completed", description: "Validation des exigences fonctionnelles et techniques avec le client." },
                { id: 2, title: "Modélisation UML/ER", date: "2023-05-05", status: "completed", description: "Création des diagrammes de classes et entité-relation pour le projet." },
                { id: 3, title: "Développement backend", date: "2023-06-20", status: "in-progress", description: "Implémentation des fonctionnalités principales côté serveur." },
                { id: 4, title: "Tests d'intégration", date: "2023-06-25", status: "upcoming", description: "Validation du fonctionnement global de l'application." },
                { id: 5, title: "Déploiement en production", date: "2023-07-15", status: "delayed", description: "Mise en ligne de l'application pour les utilisateurs finaux." }
            ],
            raci: [
                { activity: "Génération entités JPA", responsible: "Marie Smith", accountable: "Pierre Martin", consulted: "Jean Dupont", informed: "Alice Lambert" },
                { activity: "CRUD Spring Data Rest", responsible: "Marie Smith", accountable: "Pierre Martin", consulted: "Jean Dupont", informed: "Alice Lambert" },
                { activity: "Custom Handlers CRUD", responsible: "Jean Dupont", accountable: "Pierre Martin", consulted: "Marie Smith", informed: "Alice Lambert" },
                { activity: "Tests backend", responsible: "Marie Smith", accountable: "Pierre Martin", consulted: "Jean Dupont", informed: "Alice Lambert" },
                { activity: "Page d'accueil", responsible: "Alice Lambert", accountable: "Pierre Martin", consulted: "Jean Dupont", informed: "Marie Smith" }
            ],
            documents: [
                { name: "Cahier des charges.pdf", type: "PDF", size: "2.4 MB", date: "2023-05-01", author: "Pierre Martin", icon: "file-pdf", color: "text-danger" },
                { name: "Documentation API.html", type: "HTML", size: "1.1 MB", date: "2023-06-10", author: "Marie Smith", icon: "file-code", color: "text-info" },
                { name: "Budget projet.xlsx", type: "Excel", size: "850 KB", date: "2023-05-15", author: "Pierre Martin", icon: "file-excel", color: "text-success" },
                { name: "Maquettes UI.zip", type: "Archive", size: "5.7 MB", date: "2023-05-20", author: "Alice Lambert", icon: "file-image", color: "text-warning" },
                { name: "Rapport hebdo.docx", type: "Word", size: "350 KB", date: "2023-06-12", author: "Pierre Martin", icon: "file-word", color: "text-primary" }
            ],
            links: [
                { name: "Repository GitHub", description: "Code source du projet", url: "#", icon: "fab fa-github" },
                { name: "Swagger API Docs", description: "Documentation interactive des API", url: "#", icon: "fas fa-book" },
                { name: "Tableau de bord Metabase", description: "Statistiques et analytics", url: "#", icon: "fas fa-chart-bar" },
                { name: "Environnement de test", description: "Accès à la version de démo", url: "#", icon: "fas fa-globe" }
            ],
            comments: [
                { author: "Pierre Martin", date: "2023-06-20T14:30:00Z", text: "N'oubliez pas d'ajouter la documentation API dans le dossier partagé avant la réunion de demain." },
                { author: "Marie Smith", date: "2023-06-19T09:00:00Z", text: "J'ai mis à jour le schéma de la base de données suite aux derniers changements." }
            ],
            versions: [
                { name: "v1.2.0", status: "Stable", date: "2023-06-10", description: "Implémentation du panier et système de paiement" },
                { name: "v1.1.0", status: "Beta", date: "2023-05-25", description: "Gestion des produits et catégories" },
                { name: "v1.0.0", status: "Alpha", date: "2023-05-10", description: "Version initiale avec authentification" }
            ],
            risks: [
                { title: "Intégration des paiements", type: "danger", description: "Délai supplémentaire nécessaire pour implémenter la solution de paiement sécurisée." },
                { title: "Disponibilité des ressources", type: "warning", description: "Jean Dupont est surchargé cette semaine (90% de charge)." },
                { title: "Changement de scope", type: "info", description: "Le client a demandé d'ajouter une fonctionnalité d'export des commandes." }
            ]
        }
    },
    lastId: 1
};

class ProjectPortal {
    constructor() {
        this.data = this.loadData();
        this.currentProjectId = null;
        this.charts = {}; // Store Chart.js instances
        this.init();
    }

    // Load data from localStorage or use initial data
    loadData() {
        const savedData = localStorage.getItem('projectPortalData');
        return savedData ? JSON.parse(savedData) : initialData;
    }

    // Save data to localStorage
    saveData() {
        localStorage.setItem('projectPortalData', JSON.stringify(this.data));
    }

    // Initialize the application
    init() {
        this.renderProjectsList();
        // Load the first project by default, or the example project if no projects exist
        const firstProjectId = Object.keys(this.data.projects)[0];
        if (firstProjectId) {
            this.loadProject(parseInt(firstProjectId));
        } else {
            // If no projects, render the admin tab by default
            this.renderAdminTab();
        }
        this.setupEventListeners();
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Set up all event listeners
    setupEventListeners() {
        // New project button click
        document.getElementById('newProjectBtn').addEventListener('click', () => this.showProjectForm());

        // Save project button click inside the modal
        document.getElementById('saveProjectBtn').addEventListener('click', () => this.saveProject());

        // Project list item click (for navigation)
        document.getElementById('projectsList').addEventListener('click', (e) => {
            const projectItem = e.target.closest('.project-item');
            if (projectItem) {
                const projectId = parseInt(projectItem.dataset.projectId);
                this.loadProject(projectId);
            }
        });

        // Event listener for "Modifier ce projet" button
        document.getElementById('projectView').addEventListener('click', (e) => {
            if (e.target.closest('.edit-btn')) {
                const projectId = parseInt(e.target.closest('.edit-btn').dataset.projectId);
                this.showProjectForm(projectId);
            }
            // Toggle checklist item completion
            if (e.target.classList.contains('form-check-input') && e.target.closest('.checklist-item')) {
                const checkbox = e.target;
                const taskId = parseInt(checkbox.dataset.taskId);
                const categoryElement = checkbox.closest('[data-checklist-category]');
                const category = categoryElement ? categoryElement.dataset.checklistCategory : null;
                if (category) {
                    this.toggleChecklistItem(this.currentProjectId, category, taskId, checkbox.checked);
                }
            }
            // Open New Task Modal
            if (e.target.closest('#addNewTaskBtn')) {
                this.showTaskForm(this.currentProjectId);
            }
            // Open Upload Document Modal
            if (e.target.closest('#uploadDocumentProjectBtn')) {
                this.showDocumentUploadForm(this.currentProjectId);
            }
            // Open New Milestone Modal
            if (e.target.closest('#addNewMilestoneBtn')) {
                this.showMilestoneForm(this.currentProjectId);
            }
            // Edit Milestone button
            if (e.target.closest('.edit-milestone-btn')) {
                const milestoneId = parseInt(e.target.closest('.edit-milestone-btn').dataset.milestoneId);
                this.showMilestoneForm(this.currentProjectId, milestoneId);
            }
            // Delete Milestone button
            if (e.target.closest('.delete-milestone-btn')) {
                const milestoneId = parseInt(e.target.closest('.delete-milestone-btn').dataset.milestoneId);
                this.deleteMilestone(this.currentProjectId, milestoneId);
            }
            // Delete Project button in Admin tab
            if (e.target.closest('.delete-project-btn')) {
                const projectIdToDelete = parseInt(e.target.closest('.delete-project-btn').dataset.projectId);
                this.deleteProject(projectIdToDelete);
            }
        });

        // Add task button in New Task Modal
        document.getElementById('createTaskBtn').addEventListener('click', () => this.createTask());

        // Upload document button in Upload Document Modal
        document.getElementById('uploadDocumentBtn').addEventListener('click', () => this.uploadDocument());

        // Save Milestone button in New Milestone Modal
        document.getElementById('saveMilestoneBtn').addEventListener('click', () => this.saveMilestone());

        // Admin Tab button click
        document.getElementById('adminTabBtn').addEventListener('click', () => {
            this.currentProjectId = null; // No specific project selected
            this.renderProjectsList(); // Update sidebar active state
            this.renderAdminTab();
        });
    }

    // Show the project creation/edit form modal
    showProjectForm(projectId = null) {
        const modalEl = document.getElementById('projectModal');
        const modal = new bootstrap.Modal(modalEl);
        const form = modalEl.querySelector('#projectForm');

        if (projectId) {
            // Edit mode
            modalEl.querySelector('.modal-title').textContent = "Modifier le projet";
            const project = this.data.projects[projectId];
            form.querySelector('#projectId').value = projectId;
            form.querySelector('#projectTitle').value = project.title;
            form.querySelector('#projectClient').value = project.client || '';
            form.querySelector('#projectStartDate').value = project.startDate || '';
            form.querySelector('#projectEndDate').value = project.endDate || '';
            form.querySelector('#projectDescription').value = project.description;
            form.querySelector('#projectTemplate').value = project.template || 'Choisir un template...';
            // Set selected team members
            const teamMembersSelect = form.querySelector('#projectTeamMembers');
            Array.from(teamMembersSelect.options).forEach(option => {
                option.selected = project.teamMembers && project.teamMembers.includes(option.value);
            });

        } else {
            // Create mode
            modalEl.querySelector('.modal-title').textContent = "Nouveau projet";
            form.reset(); // Clear form for new project
            form.querySelector('#projectId').value = ''; // Ensure ID is empty for new project
            // Clear selected members in the dropdown for new project
            Array.from(form.querySelector('#projectTeamMembers').options).forEach(option => {
                option.selected = false;
            });
        }
        modal.show();
    }

    // Save or update a project
    saveProject() {
        const form = document.getElementById('projectForm');
        const projectId = form.elements['projectId'].value;
        const selectedTeamMembers = Array.from(form.elements['projectTeamMembers'].options)
                                     .filter(option => option.selected)
                                     .map(option => option.value);

        const projectData = {
            title: form.elements['projectTitle'].value,
            client: form.elements['projectClient'].value,
            startDate: form.elements['projectStartDate'].value,
            endDate: form.elements['projectEndDate'].value,
            description: form.elements['projectDescription'].value,
            template: form.elements['projectTemplate'].value,
            teamMembers: selectedTeamMembers,
            updatedAt: new Date().toISOString()
        };

        if (projectId) {
            // Update existing project
            this.data.projects[projectId] = {
                ...this.data.projects[projectId],
                ...projectData
            };
            this.loadProject(parseInt(projectId)); // Reload current project view
        } else {
            // Create new project
            const newId = ++this.data.lastId;
            this.data.projects[newId] = {
                id: newId,
                status: "Nouveau",
                progress: 0,
                tasks: [],
                checklists: {}, // Initialize as empty object
                timeline: [{ id: 1, title: "Initialisation Projet", date: new Date().toISOString().substring(0, 10), status: "completed", description: "Lancement officiel du projet." }], // Default milestone
                raci: [],
                documents: [],
                links: [],
                comments: [],
                versions: [{name: "v1.0.0", status: "Alpha", date: new Date().toISOString(), description: "Première version du projet"}],
                risks: [],
                createdAt: new Date().toISOString(),
                ...projectData
            };
            this.loadProject(newId); // Load the newly created project
        }

        this.saveData();
        this.renderProjectsList();
        bootstrap.Modal.getInstance(document.getElementById('projectModal')).hide();
    }

    // Render the list of projects in the sidebar
    renderProjectsList() {
        const container = document.getElementById('projectsList');
        container.innerHTML = '<h6 class="sidebar-header">Mes Projets</h6>';

        Object.values(this.data.projects).forEach(project => {
            const projectEl = document.createElement('div');
            projectEl.className = `sidebar-item project-item ${this.currentProjectId === project.id ? 'active' : ''}`;
            projectEl.dataset.projectId = project.id;
            projectEl.innerHTML = `
                <i class="fas fa-project-diagram"></i>
                <span>${project.title}</span>
            `;
            container.appendChild(projectEl);
        });

        // Highlight Admin tab if it's active
        const adminTabBtn = document.getElementById('adminTabBtn');
        if (adminTabBtn) {
            if (this.currentProjectId === null) { // Assuming null projectId means Admin tab is active
                adminTabBtn.classList.add('active');
            } else {
                adminTabBtn.classList.remove('active');
            }
        }

        // Update active projects count in sidebar
        document.getElementById('activeProjectsCount').textContent = Object.keys(this.data.projects).length;
    }

    // Load and render a specific project's details
    loadProject(projectId) {
        const project = this.data.projects[projectId];
        if (!project) {
            document.getElementById('projectView').innerHTML = `
                <div class="alert alert-warning text-center" role="alert">
                    Le projet demandé n'existe pas. Veuillez sélectionner un projet dans la liste.
                </div>
            `;
            this.currentProjectId = null;
            this.renderProjectsList(); // Update sidebar to reflect no active project or select a default one
            return;
        }

        this.currentProjectId = projectId;
        this.renderProjectsList(); // Update active state in sidebar

        const projectViewEl = document.getElementById('projectView');
        projectViewEl.innerHTML = `
            <div class="project-header" data-aos="fade-down">
                <div>
                    <h2 id="projectTitle">${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Projets</a></li>
                            <li class="breadcrumb-item active" aria-current="page">${project.title}</li>
                        </ol>
                    </nav>
                </div>
                <div class="project-meta">
                    <span class="badge bg-${this.getStatusColor(project.status)}"><i class="fas fa-circle me-1"></i> ${project.status}</span>
                    <span class="badge bg-primary">Date limite: ${project.endDate ? new Date(project.endDate).toLocaleDateString() : 'N/A'}</span>
                    <button class="btn btn-outline-primary btn-sm edit-btn" data-project-id="${project.id}">
                        <i class="fas fa-edit"></i> Modifier
                    </button>
                </div>
            </div>

            <!-- Project Tabs -->
            <ul class="nav nav-pills mb-4" id="projectTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="overview-tab" data-bs-toggle="pill" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">
                        <i class="fas fa-home me-1"></i> Vue d'ensemble
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tasks-tab" data-bs-toggle="pill" data-bs-target="#tasks" type="button" role="tab" aria-controls="tasks" aria-selected="false">
                        <i class="fas fa-tasks me-1"></i> Tâches & Checklist
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="timeline-tab" data-bs-toggle="pill" data-bs-target="#timeline" type="button" role="tab" aria-controls="timeline" aria-selected="false">
                        <i class="fas fa-calendar-alt me-1"></i> Planification
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="team-tab" data-bs-toggle="pill" data-bs-target="#team" type="button" role="tab" aria-controls="team" aria-selected="false">
                        <i class="fas fa-users me-1"></i> Équipe & RACI
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="documents-tab" data-bs-toggle="pill" data-bs-target="#documents" type="button" role="tab" aria-controls="documents" aria-selected="false">
                        <i class="fas fa-file-alt me-1"></i> Documents
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="reports-tab" data-bs-toggle="pill" data-bs-target="#reports" type="button" role="tab" aria-controls="reports" aria-selected="false">
                        <i class="fas fa-chart-pie me-1"></i> Rapports
                    </button>
                </li>
            </ul>

            <!-- Tab Content -->
            <div class="tab-content" id="projectTabsContent">
                <!-- Overview Tab -->
                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                    ${this.renderOverviewTab(project)}
                </div>
                
                <!-- Tasks Tab -->
                <div class="tab-pane fade" id="tasks" role="tabpanel" aria-labelledby="tasks-tab">
                    ${this.renderTasksTab(project)}
                </div>
                
                <!-- Timeline Tab -->
                <div class="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                    ${this.renderTimelineTab(project)}
                </div>
                
                <!-- Team Tab -->
                <div class="tab-pane fade" id="team" role="tabpanel" aria-labelledby="team-tab">
                    ${this.renderTeamTab(project)}
                </div>
                
                <!-- Documents Tab -->
                <div class="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                    ${this.renderDocumentsTab(project)}
                </div>
                
                <!-- Reports Tab -->
                <div class="tab-pane fade" id="reports" role="tabpanel" aria-labelledby="reports-tab">
                    ${this.renderReportsTab(project)}
                </div>
            </div>
        `;

        // Render Project Stats (always visible at the top)
        const projectStatsRow = document.querySelector('.project-header + .row.mb-4');
        if (projectStatsRow) {
            projectStatsRow.innerHTML = this.renderProjectStats(project);
        } else {
            // Fallback: if somehow the row is not there, append it (shouldn't happen with current structure)
            projectViewEl.insertAdjacentHTML('afterbegin', `<div class="row mb-4">${this.renderProjectStats(project)}</div>`);
        }

        // Re-initialize AOS for newly loaded content
        AOS.refresh();

        // Render charts after the DOM elements are available
        this.renderCharts(project);
    }

    // Helper to get status badge color
    getStatusColor(status) {
        const colors = {
            'Nouveau': 'info',
            'En cours': 'warning',
            'Terminé': 'success',
            'En retard': 'danger'
        };
        return colors[status] || 'secondary';
    }

    // Render Project Stats Cards
    renderProjectStats(project) {
        // Ensure tasks array exists, otherwise default to empty array
        const tasks = project.tasks || [];
        const completedTasks = tasks.filter(task => task.completed).length;
        const inProgressTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) >= new Date()).length;
        const overdueTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) < new Date()).length;
        const totalTasks = tasks.length;
        const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        return `
            <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-title text-white-50">Tâches terminées</h6>
                                <h3 class="mb-0">${completedTasks}</h3>
                            </div>
                            <i class="fas fa-check-circle fa-2x opacity-50"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-title text-white-50">En cours</h6>
                                <h3 class="mb-0">${inProgressTasks}</h3>
                            </div>
                            <i class="fas fa-spinner fa-2x opacity-50"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-title text-white-50">En retard</h6>
                                <h3 class="mb-0">${overdueTasks}</h3>
                            </div>
                            <i class="fas fa-exclamation-triangle fa-2x opacity-50"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3" data-aos="fade-up" data-aos-delay="400">
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-title text-white-50">Progression</h6>
                                <h3 class="mb-0">${progressPercentage}%</h3>
                            </div>
                            <i class="fas fa-chart-line fa-2x opacity-50"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Render Overview Tab content
    renderOverviewTab(project) {
        const recentTasksHtml = (project.tasks || []).slice(0, 4).map(task => `
            <tr>
                <td>${task.title}</td>
                <td><span class="badge bg-${task.completed ? 'success' : (new Date(task.dueDate) < new Date() ? 'danger' : 'warning')}">${task.completed ? 'Terminé' : (new Date(task.dueDate) < new Date() ? 'En retard' : 'En cours')}</span></td>
                <td><span class="badge bg-${task.priority === 'Haute' ? 'danger' : (task.priority === 'Moyenne' ? 'warning' : 'success')}">${task.priority}</span></td>
                <td>${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm me-2">${task.assignedTo.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase()}</div>
                        <span>${task.assignedTo.split('(')[0].trim()}</span>
                    </div>
                </td>
            </tr>
        `).join('');

        const teamMembersHtml = (project.teamMembers || []).map(member => `
            <div class="user-card" data-aos="fade-up" data-aos-delay="100">
                <div class="avatar bg-primary">${member.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase()}</div>
                <div class="user-info">
                    <h6>${member.split('(')[0].trim()}</h6>
                    <small>${member.includes('(') ? member.substring(member.indexOf('(') + 1, member.indexOf(')')) : 'Rôle non spécifié'}</small>
                </div>
            </div>
        `).join('');

        const recentActivityHtml = (project.comments || []).map(comment => `
            <div class="activity-item user">
                <div class="d-flex justify-content-between">
                    <strong>${comment.author}</strong>
                    <small class="text-muted">${new Date(comment.date).toLocaleString()}</small>
                </div>
                <p class="mb-0">${comment.text}</p>
            </div>
        `).join('');

        const resourcesHtml = (project.documents || []).map(doc => `
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span><i class="fas fa-${doc.icon} me-2 ${doc.color}"></i> ${doc.name}</span>
                <span class="badge bg-primary rounded-pill">${doc.type}</span>
            </a>
        `).join('');

        return `
            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Progression du projet</h5>
                            <div>
                                <button class="btn btn-sm btn-outline-primary me-2">Semaine</button>
                                <button class="btn btn-sm btn-outline-primary me-2">Mois</button>
                                <button class="btn btn-sm btn-primary">Global</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <canvas id="projectProgressChart" height="250"></canvas>
                        </div>
                    </div>
                    
                    <div class="card mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Tâches récentes</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tâche</th>
                                            <th>Statut</th>
                                            <th>Priorité</th>
                                            <th>Échéance</th>
                                            <th>Responsable</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${recentTasksHtml}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="5" class="text-center">
                                                <button class="btn btn-outline-primary" data-bs-toggle="pill" data-bs-target="#tasks" type="button" role="tab" aria-controls="tasks" aria-selected="false">Voir toutes les tâches</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Équipe du projet</h5>
                        </div>
                        <div class="card-body">
                            ${teamMembersHtml}
                            <div class="text-center mt-3">
                                <button class="btn btn-sm btn-outline-primary">Ajouter un membre</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Activité récente</h5>
                        </div>
                        <div class="card-body">
                            ${recentActivityHtml}
                            <div class="text-center mt-3">
                                <button class="btn btn-sm btn-outline-primary">Voir tout l'historique</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="200">
                        <div class="card-header">
                            <h5 class="mb-0">Ressources</h5>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                ${resourcesHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Render Tasks Tab content
    renderTasksTab(project) {
        const allTasksHtml = (project.tasks || []).map(task => `
            <div class="task-item ${task.priority === 'Haute' ? 'high-priority' : (task.priority === 'Moyenne' ? 'medium-priority' : 'low-priority')}" data-aos="fade-up">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''} data-task-id="${task.id}" data-checklist-category="${task.checklistCategory || 'Général'}">
                        <label class="form-check-label ${task.completed ? 'text-muted' : ''}" for="task-${task.id}">
                            <strong>${task.title}</strong>
                        </label>
                    </div>
                    <span class="badge bg-${task.priority === 'Haute' ? 'danger' : (task.priority === 'Moyenne' ? 'warning' : 'success')}">${task.priority}</span>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <small class="text-muted">${task.completed ? 'Terminée le:' : 'Échéance:'} ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</small>
                    <small class="text-muted">Assignée à: ${task.assignedTo.split('(')[0].trim()}</small>
                </div>
            </div>
        `).join('');

        const checklistsHtml = Object.keys(project.checklists || {}).map(category => {
            const checklistItems = project.checklists[category];
            const completed = (checklistItems || []).filter(item => item.completed).length;
            const total = (checklistItems || []).length;
            const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
            const progressColor = percentage === 100 ? 'success' : 'warning';

            return `
                <div class="card mb-4" data-aos="fade-up">
                    <div class="card-header">
                        <h5 class="mb-0">Checklist - ${category}</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="progress w-100 me-3">
                                <div class="progress-bar bg-${progressColor}" role="progressbar" style="width: ${percentage}%;" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">${percentage}%</div>
                            </div>
                            <small>${completed}/${total}</small>
                        </div>
                        <div data-checklist-category="${category}">
                            ${(checklistItems || []).map(item => `
                                <div class="checklist-item ${item.completed ? 'completed' : ''}">
                                    <input type="checkbox" class="form-check-input" id="checklist-${category}-${item.id}" data-task-id="${item.id}" ${item.completed ? 'checked' : ''}>
                                    <div class="task-description">
                                        <label for="checklist-${category}-${item.id}">${item.title}</label>
                                    </div>
                                    <div class="task-actions">
                                        <button class="btn btn-sm btn-link text-muted"><i class="fas fa-comment"></i></button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const overdueTasks = (project.tasks || []).filter(task => !task.completed && new Date(task.dueDate) < new Date());
        const overdueTasksHtml = overdueTasks.map(task => `
            <div class="task-item high-priority" data-aos="fade-up" data-aos-delay="100">
                <div class="d-flex justify-content-between align-items-center">
                    <strong>${task.title}</strong>
                    <span class="badge bg-danger">${Math.ceil((new Date() - new Date(task.dueDate)) / (1000 * 60 * 60 * 24))} jours</span>
                </div>
                <small class="text-muted d-block">Échéance: ${new Date(task.dueDate).toLocaleDateString()}</small>
            </div>
        `).join('');

        return `
            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Toutes les tâches</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3">
                                <div class="btn-group">
                                    <button class="btn btn-sm btn-outline-primary active">Toutes</button>
                                    <button class="btn btn-sm btn-outline-primary">À faire</button>
                                    <button class="btn btn-sm btn-outline-primary">En cours</button>
                                    <button class="btn btn-sm btn-outline-primary">Terminées</button>
                                </div>
                                <button class="btn btn-sm btn-primary" id="addNewTaskBtn">
                                    <i class="fas fa-plus me-1"></i>Nouvelle tâche
                                </button>
                            </div>
                            
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Rechercher une tâche...">
                            </div>
                            
                            <div id="allTasksList">
                                ${allTasksHtml.length > 0 ? allTasksHtml : '<div class="alert alert-info text-center">Aucune tâche pour ce projet.</div>'}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    ${checklistsHtml.length > 0 ? checklistsHtml : '<div class="alert alert-info text-center">Aucune checklist définie pour ce projet.</div>'}
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Tâches en retard</h5>
                        </div>
                        <div class="card-body">
                            ${overdueTasks.length > 0 ? `
                                <div class="alert alert-warning">
                                    <i class="fas fa-exclamation-triangle me-2"></i>
                                    <strong>${overdueTasks.length} tâche(s) en retard</strong>
                                </div>
                                ${overdueTasksHtml}
                            ` : `<div class="alert alert-success">Aucune tâche en retard !</div>`}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Toggle checklist item completion
    toggleChecklistItem(projectId, category, taskId, isCompleted) {
        const project = this.data.projects[projectId];
        if (!project || !project.checklists || !project.checklists[category]) {
            console.warn(`Category "${category}" or project not found for checklist item toggle.`);
            return;
        }

        const checklistItem = project.checklists[category].find(item => item.id === taskId);
        if (checklistItem) {
            checklistItem.completed = isCompleted;

            // Also update the corresponding task's completed status if it exists
            const task = (project.tasks || []).find(t => t.id === taskId && t.checklistCategory === category);
            if (task) {
                task.completed = isCompleted;
            }

            this.saveData();
            // Reload the tasks tab to reflect changes and re-render charts
            this.loadProject(projectId);
            const tasksTabBtn = document.getElementById('tasks-tab');
            if (tasksTabBtn) {
                new bootstrap.Tab(tasksTabBtn).show(); // Re-activate the tasks tab
            }
        }
    }

    // Show New Task Modal
    showTaskForm(projectId) {
        const modalEl = document.getElementById('newTaskModal');
        const modal = new bootstrap.Modal(modalEl);
        const form = modalEl.querySelector('#taskForm');
        form.reset();
        form.querySelector('#currentProjectTaskModalId').value = projectId;

        // Populate assignedTo and checklist dropdowns from project data
        const project = this.data.projects[projectId];
        const assignedToSelect = form.querySelector('#taskAssignedTo');
        const checklistSelect = form.querySelector('#taskChecklist');

        // Clear previous options
        assignedToSelect.innerHTML = '';
        checklistSelect.innerHTML = '';

        // Add default options
        assignedToSelect.innerHTML += '<option value="">Sélectionner un membre...</option>';
        checklistSelect.innerHTML += '<option value="">Sélectionner une catégorie...</option>';


        // Populate assignedTo
        (project.teamMembers || []).forEach(member => {
            const option = document.createElement('option');
            option.value = member;
            option.textContent = member.split('(')[0].trim();
            assignedToSelect.appendChild(option);
        });

        // Populate checklist categories based on existing ones or default
        const existingCategories = Object.keys(project.checklists || {});
        if (existingCategories.length > 0) {
            existingCategories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                checklistSelect.appendChild(option);
            });
        } else {
            // Add some default categories if none exist
            ['Général', 'Backend', 'Frontend', 'Tests', 'Documentation'].forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                checklistSelect.appendChild(option);
            });
        }
        modal.show();
    }

    // Create a new task
    createTask() {
        const form = document.getElementById('taskForm');
        const projectId = parseInt(form.elements['currentProjectTaskModalId'].value);
        const project = this.data.projects[projectId];

        if (!project) {
            console.error("Project not found for task creation.");
            return;
        }

        // Generate a new ID for the task
        const newTaskId = (project.tasks && project.tasks.length > 0) ? Math.max(...project.tasks.map(t => t.id)) + 1 : 1;

        const newTask = {
            id: newTaskId,
            title: form.elements['taskTitle'].value,
            description: form.elements['taskDescription'].value,
            priority: form.elements['taskPriority'].value,
            dueDate: form.elements['taskDueDate'].value,
            assignedTo: form.elements['taskAssignedTo'].value,
            checklistCategory: form.elements['taskChecklist'].value || 'Général', // Default to 'Général' if not selected
            completed: false
        };

        if (!project.tasks) {
            project.tasks = []; // Initialize if it doesn't exist
        }
        project.tasks.push(newTask);

        // Add to the relevant checklist if category exists, or create new one
        if (!project.checklists) {
            project.checklists = {}; // Initialize if it doesn't exist
        }
        if (!project.checklists[newTask.checklistCategory]) {
            project.checklists[newTask.checklistCategory] = [];
        }
        project.checklists[newTask.checklistCategory].push({
            id: newTask.id, // Using task ID for checklist item ID
            title: newTask.title,
            completed: newTask.completed
        });

        this.saveData();
        this.loadProject(projectId);
        new bootstrap.Tab(document.getElementById('tasks-tab')).show(); // Switch to tasks tab
        bootstrap.Modal.getInstance(document.getElementById('newTaskModal')).hide();
    }

    // Show New Milestone Modal (Create/Edit Milestone)
    showMilestoneForm(projectId, milestoneId = null) {
        const modalEl = document.getElementById('newMilestoneModal');
        const modal = new bootstrap.Modal(modalEl);
        const form = modalEl.querySelector('#milestoneForm');
        
        form.querySelector('#currentProjectMilestoneModalId').value = projectId;

        if (milestoneId !== null) {
            // Edit mode
            modalEl.querySelector('.modal-title').textContent = "Modifier le Jalon";
            const project = this.data.projects[projectId];
            const milestone = (project.timeline || []).find(m => m.id === milestoneId);
            if (milestone) {
                form.querySelector('#milestoneId').value = milestoneId;
                form.querySelector('#milestoneTitle').value = milestone.title;
                form.querySelector('#milestoneDate').value = milestone.date;
                form.querySelector('#milestoneStatus').value = milestone.status;
                form.querySelector('#milestoneDescription').value = milestone.description;
            } else {
                console.error("Jalon non trouvé pour l'édition:", milestoneId);
                return;
            }
        } else {
            // Create mode
            modalEl.querySelector('.modal-title').textContent = "Nouveau Jalon";
            form.reset();
            form.querySelector('#milestoneId').value = '';
            form.querySelector('#milestoneStatus').value = 'upcoming'; // Default status
        }
        modal.show();
    }

    // Save or update a milestone
    saveMilestone() {
        const form = document.getElementById('milestoneForm');
        const projectId = parseInt(form.elements['currentProjectMilestoneModalId'].value);
        const milestoneId = form.elements['milestoneId'].value ? parseInt(form.elements['milestoneId'].value) : null;
        const project = this.data.projects[projectId];

        if (!project) {
            console.error("Projet non trouvé pour la sauvegarde du jalon.");
            return;
        }

        const milestoneData = {
            title: form.elements['milestoneTitle'].value,
            date: form.elements['milestoneDate'].value,
            status: form.elements['milestoneStatus'].value,
            description: form.elements['milestoneDescription'].value
        };

        if (!project.timeline) {
            project.timeline = []; // Initialize if it doesn't exist
        }

        if (milestoneId) {
            // Update existing milestone
            const index = project.timeline.findIndex(m => m.id === milestoneId);
            if (index !== -1) {
                project.timeline[index] = { ...project.timeline[index], ...milestoneData };
            }
        } else {
            // Create new milestone
            const newId = (project.timeline.length > 0 ? Math.max(...project.timeline.map(m => m.id)) + 1 : 1);
            project.timeline.push({ id: newId, ...milestoneData });
        }

        this.saveData();
        this.loadProject(projectId);
        new bootstrap.Tab(document.getElementById('timeline-tab')).show(); // Switch to timeline tab
        bootstrap.Modal.getInstance(document.getElementById('newMilestoneModal')).hide();
    }

    // Delete a milestone
    deleteMilestone(projectId, milestoneId) {
        if (!confirm("Êtes-vous sûr de vouloir supprimer ce jalon ?")) {
            return; // Exit if user cancels
        }
        const project = this.data.projects[projectId];
        if (!project || !project.timeline) {
            console.error("Projet ou timeline non trouvé pour la suppression du jalon.");
            return;
        }

        project.timeline = project.timeline.filter(m => m.id !== milestoneId);
        this.saveData();
        this.loadProject(projectId);
        new bootstrap.Tab(document.getElementById('timeline-tab')).show(); // Switch to timeline tab
    }

    // Render Timeline Tab content
    renderTimelineTab(project) {
        // Sort timeline items by date for proper display
        const sortedTimeline = (project.timeline || []).sort((a, b) => new Date(a.date) - new Date(b.date));

        const timelineItemsHtml = sortedTimeline.map(item => `
            <div class="timeline-item ${item.status}" data-aos="fade-up">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6>${item.title}</h6>
                        <p class="small text-muted">${item.status === 'completed' ? 'Terminé le:' : (item.status === 'in-progress' ? 'En cours - Échéance:' : (item.status === 'delayed' ? 'En retard - Échéance:' : 'Planifié pour'))} ${new Date(item.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-outline-primary me-2 edit-milestone-btn" data-milestone-id="${item.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger delete-milestone-btn" data-milestone-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <p>${item.description}</p>
            </div>
        `).join('');

        const upcomingDeadlinesHtml = (project.tasks || []).filter(task => !task.completed && new Date(task.dueDate) >= new Date()).sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate)).slice(0, 3).map(task => `
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${task.title}</h6>
                    <small class="text-muted">${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</small>
                </div>
                <p class="mb-1 small">${task.description || 'Pas de description.'}</p>
                <small class="text-muted">Assigné à ${task.assignedTo ? task.assignedTo.split('(')[0].trim() : 'N/A'}</small>
            </a>
        `).join('');

        return `
            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Planification du projet</h5>
                            <button class="btn btn-sm btn-primary" id="addNewMilestoneBtn">
                                <i class="fas fa-plus me-1"></i>Nouveau Jalon
                            </button>
                        </div>
                        <div class="card-body">
                            <div id="projectTimeline" class="timeline">
                                ${timelineItemsHtml.length > 0 ? timelineItemsHtml : `
                                <div class="text-center py-5">
                                    <i class="fas fa-calendar-alt fa-3x text-primary mb-3"></i>
                                    <h4>Aucun jalon défini pour ce projet.</h4>
                                    <p class="text-muted">Ajoutez des jalons pour suivre les étapes clés de votre projet.</p>
                                    <button class="btn btn-primary" id="addNewMilestoneBtn">Ajouter un jalon</button>
                                </div>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Calendrier</h5>
                        </div>
                        <div class="card-body">
                            <div id="miniCalendar">
                                <div class="text-center py-3">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-chevron-left"></i></button>
                                        <h5 class="mb-0">${new Date().toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}</h5>
                                        <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-chevron-right"></i></button>
                                    </div>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- Dynamically generated calendar days -->
                                            ${this.generateCalendarDays(project)}
                                        </tbody>
                                    </table>
                                    <div class="text-start mt-2">
                                        <div class="d-flex align-items-center mb-1">
                                            <div class="badge bg-info me-2">&nbsp;</div>
                                            <small>Événement projet (Tâche/Jalon)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Prochaines échéances</h5>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                ${upcomingDeadlinesHtml.length > 0 ? upcomingDeadlinesHtml : '<div class="alert alert-info">Aucune échéance à venir.</div>'}
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="200">
                        <div class="card-header">
                            <h5 class="mb-0">Charge de travail</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="workloadChart" height="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Helper to generate calendar days (simplified) - Now highlights task due dates and timeline dates
    generateCalendarDays(project) {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 for Sunday, 1 for Monday
        let dayOfWeekOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust to Monday = 0
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Collect all relevant dates (task due dates, timeline dates)
        const relevantDates = new Set();
        (project.tasks || []).forEach(task => {
            if (task.dueDate) {
                const date = new Date(task.dueDate);
                if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
                    relevantDates.add(date.getDate());
                }
            }
        });
        (project.timeline || []).forEach(item => {
            const date = new Date(item.date);
            if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
                relevantDates.add(date.getDate());
            }
        });


        let html = '';
        let dayCounter = 1;
        for (let i = 0; i < 6; i++) { // Max 6 rows for a month
            html += '<tr>';
            for (let j = 0; j < 7; j++) { // 7 days a week
                if (i === 0 && j < dayOfWeekOffset) {
                    html += '<td></td>'; // Empty cells before the first day
                } else if (dayCounter <= daysInMonth) {
                    let cellClass = '';
                    if (dayCounter === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                        cellClass += 'bg-primary text-white'; // Highlight today
                    } else if (relevantDates.has(dayCounter)) {
                        cellClass += 'bg-info text-white'; // Highlight relevant project dates
                    }
                    html += `<td class="${cellClass}">${dayCounter}</td>`;
                    dayCounter++;
                } else {
                    html += '<td></td>'; // Empty cells after the last day
                }
            }
            html += '</tr>';
            if (dayCounter > daysInMonth) break;
        }
        return html;
    }

    // Render Team Tab content
    renderTeamTab(project) {
        const raciHtml = (project.raci || []).map(item => `
            <tr>
                <td>${item.activity}</td>
                <td><span class="raci-badge responsible">${item.responsible ? item.responsible.split('(')[0].trim() : 'N/A'}</span></td>
                <td><span class="raci-badge accountable">${item.accountable ? item.accountable.split('(')[0].trim() : 'N/A'}</span></td>
                <td><span class="raci-badge consulted">${item.consulted ? item.consulted.split('(')[0].trim() : 'N/A'}</span></td>
                <td><span class="raci-badge informed">${item.informed ? item.informed.split('(')[0].trim() : 'N/A'}</span></td>
            </tr>
        `).join('');

        const teamMembersCardsHtml = (project.teamMembers || []).map(member => {
            const [name, role] = member.split('(').map(s => s.trim().replace(')', ''));
            // Generate random color for avatar background
            const avatarColors = ['primary', 'success', 'warning', 'info', 'danger', 'secondary'];
            const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

            return `
                <div class="user-card" data-aos="fade-up">
                    <div class="avatar bg-${randomColor}">${name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase()}</div>
                    <div class="user-info">
                        <h6>${name}</h6>
                        <small class="text-muted">${role}</small>
                        <div class="mt-2">
                            <!-- Example badges, can be made dynamic based on member skills/tags -->
                            ${role.includes("Chef") ? '<span class="badge bg-primary me-1">Responsable</span>' : ''}
                            ${role.includes("Backend") ? '<span class="badge bg-success me-1">Java/Spring</span>' : ''}
                            ${role.includes("Fullstack") ? '<span class="badge bg-warning me-1">AngularJS</span>' : ''}
                            ${role.includes("UX Designer") ? '<span class="badge bg-info me-1">UI/UX</span>' : ''}
                            ${!role.includes("Chef") && !role.includes("Backend") && !role.includes("Fullstack") && !role.includes("UX Designer") ? '<span class="badge bg-secondary">Compétences</span>' : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Simplified availability
        const memberAvailability = (project.teamMembers || []).map(member => {
            const name = member.split('(')[0].trim();
            const workload = Math.floor(Math.random() * (100 - 50 + 1)) + 50; // Random workload 50-100%
            let color = 'success';
            if (workload > 80) color = 'warning';
            if (workload > 95) color = 'danger';
            return { name, workload, color };
        });

        const availabilityHtml = memberAvailability.map(member => `
            <div class="progress mb-2">
                <div class="progress-bar bg-${member.color}" role="progressbar" style="width: ${member.workload}%;" aria-valuenow="${member.workload}" aria-valuemin="0" aria-valuemax="100">${member.name} - ${member.workload}%</div>
            </div>
        `).join('');


        return `
            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Matrice RACI</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered raci-table">
                                    <thead>
                                        <tr>
                                            <th>Activité</th>
                                            <th>Responsable</th>
                                            <th>Autorisé</th>
                                            <th>Consulté</th>
                                            <th>Informé</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${raciHtml.length > 0 ? raciHtml : '<tr><td colspan="5" class="text-center text-muted">Aucune donnée RACI disponible.</td></tr>'}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Rôles et responsabilités</h5>
                        </div>
                        <div class="card-body">
                            <div class="accordion" id="rolesAccordion">
                                ${this.renderRolesAccordion()}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Membres de l'équipe</h5>
                        </div>
                        <div class="card-body">
                            ${teamMembersCardsHtml.length > 0 ? teamMembersCardsHtml : '<div class="alert alert-info">Aucun membre d\'équipe ajouté.</div>'}
                            <div class="text-center mt-3">
                                <button class="btn btn-outline-primary me-2">Ajouter un membre</button>
                                <button class="btn btn-primary">Modifier les rôles</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Disponibilités</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Semaine du ${new Date().toLocaleDateString('fr-FR')}</label>
                                ${availabilityHtml.length > 0 ? availabilityHtml : '<div class="alert alert-info">Aucune donnée de disponibilité.</div>'}
                            </div>
                            <div class="alert alert-warning">
                                <i class="fas fa-exclamation-triangle me-2"></i>
                                La charge de travail est à surveiller pour certains membres.
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="200">
                        <div class="card-header">
                            <h5 class="mb-0">Compétences de l'équipe</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="skillsChart" height="250"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Render Roles Accordion
    renderRolesAccordion() {
        const roles = [
            { title: "Chef de projet", icon: "fas fa-user-tie", responsibilities: ["Planification et suivi du projet", "Coordination de l'équipe", "Communication avec le client", "Validation des livrables", "Gestion des risques et problèmes"] },
            { title: "Développeur Backend", icon: "fas fa-code", responsibilities: ["Développement des API REST", "Gestion de la base de données", "Implémentation de la logique métier", "Tests unitaires et d'intégration", "Documentation technique"] },
            { title: "Développeur Frontend", icon: "fas fa-laptop-code", responsibilities: ["Développement des interfaces utilisateur", "Intégration des maquettes", "Appels aux API backend", "Tests fonctionnels", "Optimisation des performances"] },
            { title: "UX/UI Designer", icon: "fas fa-paint-brush", responsibilities: ["Conception des interfaces utilisateur", "Création des maquettes et prototypes", "Tests utilisateurs", "Optimisation de l'expérience utilisateur", "Maintenance du design system"] }
        ];

        return roles.map((role, index) => `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                        <i class="${role.icon} me-2"></i> ${role.title}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#rolesAccordion">
                    <div class="accordion-body">
                        <ul>
                            ${role.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Documents Tab content
    renderDocumentsTab(project) {
        const documentsTableHtml = (project.documents || []).map(doc => `
            <tr>
                <td><i class="fas fa-${doc.icon} ${doc.color} me-2"></i> ${doc.name}</td>
                <td>${doc.type}</td>
                <td>${doc.size}</td>
                <td>${doc.date}</td>
                <td>${doc.author}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary me-1"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="fas fa-download"></i></button>
                    <button class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');

        const linksHtml = (project.links || []).map(link => `
            <a href="${link.url}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
                <div>
                    <i class="${link.icon} me-2"></i>
                    <strong>${link.name}</strong>
                    <div class="small text-muted">${link.description}</div>
                </div>
                <i class="fas fa-external-link-alt"></i>
            </a>
        `).join('');

        const versionsHtml = (project.versions || []).map(version => `
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex justify-content-between">
                    <strong>${version.name}</strong>
                    <span class="badge bg-${version.status === 'Stable' ? 'success' : (version.status === 'Beta' ? 'warning' : 'secondary')}">${version.status}</span>
                </div>
                <small class="text-muted">Publié le ${new Date(version.date).toLocaleDateString()}</small>
                <div class="small mt-1">${version.description}</div>
            </a>
        `).join('');

        const commentsHtml = (project.comments || []).map(comment => `
            <div class="activity-item user">
                <div class="d-flex justify-content-between">
                    <strong>${comment.author}</strong>
                    <small class="text-muted">${new Date(comment.date).toLocaleString()}</small>
                </div>
                <p class="mb-2">${comment.text}</p>
                <div class="small">
                    <a href="#" class="text-muted me-2"><i class="fas fa-reply me-1"></i>Répondre</a>
                    <a href="#" class="text-muted"><i class="fas fa-thumbs-up me-1"></i>J'aime</a>
                </div>
            </div>
        `).join('');

        return `
            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">Documents du projet</h5>
                                <button class="btn btn-sm btn-primary" id="uploadDocumentProjectBtn">
                                    <i class="fas fa-upload me-1"></i>Uploader
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Type</th>
                                            <th>Taille</th>
                                            <th>Date</th>
                                            <th>Auteur</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${documentsTableHtml.length > 0 ? documentsTableHtml : '<tr><td colspan="6" class="text-center text-muted">Aucun document téléchargé.</td></tr>'}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Liens utiles</h5>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                ${linksHtml.length > 0 ? linksHtml : '<div class="alert alert-info">Aucun lien utile configuré.</div>'}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Versions et historique</h5>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                ${versionsHtml.length > 0 ? versionsHtml : '<div class="alert alert-info">Aucune version enregistrée.</div>'}
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Modèles de documents</h5>
                        </div>
                        <div class="card-body">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-file-word text-primary me-2"></i>
                                    <span>Modèle de rapport hebdomadaire</span>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-file-alt text-info me-2"></i>
                                    <span>Modèle de compte-rendu de réunion</span>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-file-excel text-success me-2"></i>
                                    <span>Modèle de suivi des tâches</span>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-file-powerpoint text-danger me-2"></i>
                                    <span>Modèle de présentation client</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="200">
                        <div class="card-header">
                            <h5 class="mb-0">Espace commentaires</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <textarea class="form-control" rows="3" placeholder="Ajouter un commentaire..."></textarea>
                                <div class="d-flex justify-content-between mt-2">
                                    <div>
                                        <button class="btn btn-sm btn-outline-secondary me-1"><i class="fas fa-paperclip"></i></button>
                                        <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-at"></i></button>
                                    </div>
                                    <button class="btn btn-sm btn-primary">Publier</button>
                                </div>
                            </div>
                            
                            ${commentsHtml.length > 0 ? commentsHtml : '<div class="alert alert-info">Aucun commentaire pour l\'instant.</div>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Show Upload Document Modal
    showDocumentUploadForm(projectId) {
        const modalEl = document.getElementById('uploadDocumentModal');
        const modal = new bootstrap.Modal(modalEl);
        const form = modalEl.querySelector('#documentUploadForm');
        form.reset();
        form.querySelector('#currentProjectDocumentModalId').value = projectId;
        modal.show();
    }

    // Upload a new document
    uploadDocument() {
        const form = document.getElementById('documentUploadForm');
        const projectId = parseInt(form.elements['currentProjectDocumentModalId'].value);
        const project = this.data.projects[projectId];

        if (!project) {
            console.error("Project not found for document upload.");
            return;
        }

        const fileName = form.elements['documentFile'].files[0] ? form.elements['documentFile'].files[0].name : 'N/A';
        const fileSize = form.elements['documentFile'].files[0] ? (form.elements['documentFile'].files[0].size / 1024 / 1024).toFixed(2) + ' MB' : '0 KB';
        const fileExtension = fileName.split('.').pop().toUpperCase();
        let fileIcon = 'file';
        let fileColor = '';

        switch(fileExtension) {
            case 'PDF': fileIcon = 'file-pdf'; fileColor = 'text-danger'; break;
            case 'HTML':
            case 'HTM': fileIcon = 'file-code'; fileColor = 'text-info'; break;
            case 'XLSX':
            case 'XLS': fileIcon = 'file-excel'; fileColor = 'text-success'; break;
            case 'ZIP':
            case 'RAR': fileIcon = 'file-archive'; fileColor = 'text-warning'; break;
            case 'DOCX':
            case 'DOC': fileIcon = 'file-word'; fileColor = 'text-primary'; break;
            case 'PNG':
            case 'JPG':
            case 'JPEG':
            case 'GIF': fileIcon = 'file-image'; fileColor = 'text-warning'; break;
            case 'PPTX':
            case 'PPT': fileIcon = 'file-powerpoint'; fileColor = 'text-danger'; break;
            default: fileIcon = 'file-alt'; fileColor = 'text-secondary';
        }

        const newDocument = {
            name: form.elements['documentName'].value || fileName,
            type: form.elements['documentType'].value,
            size: fileSize,
            date: new Date().toLocaleDateString(),
            author: "Admin", // Or current logged in user
            icon: fileIcon,
            color: fileColor
        };

        if (!project.documents) {
            project.documents = []; // Initialize if it doesn't exist
        }
        project.documents.push(newDocument);
        this.saveData();
        this.loadProject(projectId);
        new bootstrap.Tab(document.getElementById('documents-tab')).show(); // Switch to documents tab
        bootstrap.Modal.getInstance(document.getElementById('uploadDocumentModal')).hide();
    }

    // Render Reports Tab content
    renderReportsTab(project) {
        const risksHtml = (project.risks || []).map(risk => `
            <div class="alert alert-${risk.type} mb-3" data-aos="fade-up">
                <h6><i class="fas fa-exclamation-triangle me-2"></i>${risk.title}</h6>
                <p class="small mb-0">${risk.description}</p>
            </div>
        `).join('');

        return `
            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">Statistiques du projet</h5>
                                <div>
                                    <button class="btn btn-sm btn-outline-primary me-2">Mensuel</button>
                                    <button class="btn btn-sm btn-primary">Global</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <canvas id="tasksStatusChart" height="200"></canvas>
                                </div>
                                <div class="col-md-6">
                                    <canvas id="tasksPriorityChart" height="200"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Progression par module</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="modulesProgressChart" height="250"></canvas>
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="200">
                        <div class="card-header">
                            <h5 class="mb-0">Productivité de l'équipe</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="teamProductivityChart" height="250"></canvas>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Résumé des indicateurs</h5>
                        </div>
                        <div class="card-body">
                            ${this.renderIndicatorSummary(project)}
                        </div>
                    </div>
                    
                    <div class="card mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Risques et problèmes</h5>
                        </div>
                        <div class="card-body">
                            ${risksHtml.length > 0 ? risksHtml : '<div class="alert alert-success">Aucun risque ou problème majeur signalé.</div>'}
                        </div>
                    </div>
                    
                    <div class="card" data-aos="fade-up" data-aos-delay="200">
                        <div class="card-header">
                            <h5 class="mb-0">Exporter les rapports</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                <button class="btn btn-outline-primary">
                                    <i class="fas fa-file-pdf me-2"></i>Export PDF
                                </button>
                                <button class="btn btn-outline-success">
                                    <i class="fas fa-file-excel me-2"></i>Export Excel
                                </button>
                                <button class="btn btn-outline-secondary">
                                    <i class="fas fa-file-csv me-2"></i>Export CSV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Render summary of indicators
    renderIndicatorSummary(project) {
        const tasks = project.tasks || []; // Ensure tasks array exists
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const overdueTasksCount = tasks.filter(task => !task.completed && new Date(task.dueDate) < new Date()).length;
        const overallProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        const overduePercentage = totalTasks > 0 ? Math.round((overdueTasksCount / totalTasks) * 100) : 0;
        
        // Placeholder for workload and budget
        const workloadAvg = 75; // Example average workload
        const budgetConsumed = 45; // Example budget consumed percentage

        return `
            <div class="mb-3">
                <h6>Progression globale</h6>
                <div class="progress mb-2">
                    <div class="progress-bar bg-success" role="progressbar" style="width: ${overallProgress}%;" aria-valuenow="${overallProgress}" aria-valuemin="0" aria-valuemax="100">${overallProgress}%</div>
                </div>
                <small class="text-muted">${completedTasks}/${totalTasks} tâches terminées</small>
            </div>
            
            <div class="mb-3">
                <h6>Taux de complétion</h6>
                <div class="progress mb-2">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: ${project.progress}%;" aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100">${project.progress}%</div>
                </div>
                <small class="text-muted">Par rapport au planning initial</small>
            </div>
            
            <div class="mb-3">
                <h6>Tâches en retard</h6>
                <div class="progress mb-2">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${overduePercentage}%;" aria-valuenow="${overduePercentage}" aria-valuemin="0" aria-valuemax="100">${overduePercentage}%</div>
                </div>
                <small class="text-muted">${overdueTasksCount} tâche(s) sur ${totalTasks}</small>
            </div>
            
            <div class="mb-3">
                <h6>Charge de travail</h6>
                <div class="progress mb-2">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: ${workloadAvg}%;" aria-valuenow="${workloadAvg}" aria-valuemin="0" aria-valuemax="100">${workloadAvg}%</div>
                </div>
                <small class="text-muted">Moyenne de l'équipe</small>
            </div>
            
            <div class="mb-3">
                <h6>Budget consommé</h6>
                <div class="progress mb-2">
                    <div class="progress-bar bg-info" role="progressbar" style="width: ${budgetConsumed}%;" aria-valuenow="${budgetConsumed}" aria-valuemin="0" aria-valuemax="100">${budgetConsumed}%</div>
                </div>
                <small class="text-muted">€12,450 / €27,500 (Exemple)</small>
            </div>
        `;
    }

    // Render all Chart.js charts
    renderCharts(project) {
        // Destroy existing chart instances to prevent duplicates
        Object.values(this.charts).forEach(chart => {
            if (chart) { // Ensure chart instance exists before destroying
                chart.destroy();
            }
        });
        this.charts = {};

        // Only render charts if a project is selected (i.e., not in Admin tab)
        if (project) {
            // Project Progress Chart
            const progressCtx = document.getElementById('projectProgressChart');
            if (progressCtx) {
                this.charts.projectProgressChart = new Chart(progressCtx.getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        datasets: [
                            {
                                label: 'Progression prévue',
                                data: [10, 20, 35, 45, 60, 75, 100],
                                borderColor: '#6c757d',
                                backgroundColor: 'transparent',
                                borderDash: [5, 5],
                                borderWidth: 2,
                                tension: 0.1
                            },
                            {
                                label: 'Progression réelle',
                                data: [5, 15, 25, 40, 50, project.progress, null], // Use project.progress
                                borderColor: '#28a745',
                                backgroundColor: 'transparent',
                                borderWidth: 3,
                                tension: 0.1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { position: 'top' },
                            tooltip: { mode: 'index', intersect: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: { callback: function(value) { return value + '%'; } }
                            }
                        }
                    }
                });
            }

            // Tasks Status Chart
            const statusCtx = document.getElementById('tasksStatusChart');
            if (statusCtx) {
                const tasks = project.tasks || [];
                const completed = tasks.filter(t => t.completed).length;
                const inProgress = tasks.filter(t => !t.completed && new Date(t.dueDate) >= new Date()).length;
                const overdue = tasks.filter(t => !t.completed && new Date(t.dueDate) < new Date()).length;
                const todo = tasks.length - completed - inProgress - overdue;

                this.charts.tasksStatusChart = new Chart(statusCtx.getContext('2d'), {
                    type: 'doughnut',
                    data: {
                        labels: ['Terminé', 'En cours', 'À faire', 'En retard'],
                        datasets: [{
                            data: [completed, inProgress, todo, overdue],
                            backgroundColor: ['#28a745', '#17a2b8', '#6c757d', '#dc3545'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { position: 'right' },
                            title: { display: true, text: 'Statut des tâches' }
                        }
                    }
                });
            }

            // Tasks Priority Chart
            const priorityCtx = document.getElementById('tasksPriorityChart');
            if (priorityCtx) {
                const tasks = project.tasks || [];
                const highPriority = tasks.filter(t => t.priority === 'Haute').length;
                const mediumPriority = tasks.filter(t => t.priority === 'Moyenne').length;
                const lowPriority = tasks.filter(t => t.priority === 'Basse').length;

                this.charts.tasksPriorityChart = new Chart(priorityCtx.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Haute', 'Moyenne', 'Basse'],
                        datasets: [{
                            label: 'Nombre de tâches',
                            data: [highPriority, mediumPriority, lowPriority],
                            backgroundColor: ['#dc3545', '#fd7e14', '#28a745'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false },
                            title: { display: true, text: 'Tâches par priorité' }
                        },
                        scales: { y: { beginAtZero: true } }
                    }
                });
            }

            // Modules Progress Chart
            const modulesCtx = document.getElementById('modulesProgressChart');
            if (modulesCtx) {
                const checklists = project.checklists || {};
                const moduleLabels = Object.keys(checklists);
                const actualData = moduleLabels.map(category => {
                    const items = checklists[category];
                    const completed = (items || []).filter(item => item.completed).length;
                    const total = (items || []).length;
                    return total > 0 ? Math.round((completed / total) * 100) : 0;
                });

                this.charts.modulesProgressChart = new Chart(modulesCtx.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: moduleLabels,
                        datasets: [
                            {
                                label: 'Prévu',
                                data: moduleLabels.map(() => 100), // Assuming 100% planned for all
                                backgroundColor: 'rgba(108, 117, 125, 0.2)',
                                borderColor: 'rgba(108, 117, 125, 1)',
                                borderWidth: 1
                            },
                            {
                                label: 'Réalisé',
                                data: actualData,
                                backgroundColor: moduleLabels.map((_, i) => `rgba(${i * 50 % 255}, ${i * 70 % 255}, ${i * 90 % 255}, 0.7)`), // Dynamic colors
                                borderColor: moduleLabels.map((_, i) => `rgba(${i * 50 % 255}, ${i * 70 % 255}, ${i * 90 % 255}, 1)`),
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: { stacked: true },
                            y: {
                                stacked: false,
                                beginAtZero: true,
                                max: 100,
                                ticks: { callback: function(value) { return value + '%'; } }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return context.dataset.label + ': ' + context.raw + '%';
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Team Productivity Chart
            const teamCtx = document.getElementById('teamProductivityChart');
            if (teamCtx) {
                // Example data, replace with actual metrics if available
                const teamProductivityData = (project.teamMembers || []).map(member => {
                    const name = member.split('(')[0].trim();
                    return {
                        label: name,
                        data: [Math.floor(Math.random() * 50) + 50, Math.floor(Math.random() * 50) + 50, Math.floor(Math.random() * 50) + 50, Math.floor(Math.random() * 50) + 50, Math.floor(Math.random() * 50) + 50],
                        // Generate random but consistent colors for each member
                        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
                    };
                });

                this.charts.teamProductivityChart = new Chart(teamCtx.getContext('2d'), {
                    type: 'radar',
                    data: {
                        labels: ['Tâches terminées', 'Qualité du code', 'Respect des délais', 'Collaboration', 'Documentation'],
                        datasets: teamProductivityData.map(member => ({
                            label: member.label,
                            data: member.data,
                            backgroundColor: member.color.replace('1)', '0.2)'),
                            borderColor: member.color,
                            borderWidth: 2,
                            pointBackgroundColor: member.color
                        }))
                    },
                    options: {
                        responsive: true,
                        scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 100 } },
                        plugins: { title: { display: true, text: 'Productivité par membre' } }
                    }
                });
            }

            // Workload Chart
            const workloadCtx = document.getElementById('workloadChart');
            if (workloadCtx) {
                const memberNames = (project.teamMembers || []).map(m => m.split('(')[0].trim());
                const workloads = (project.teamMembers || []).map(m => Math.floor(Math.random() * (100 - 50 + 1)) + 50); // Random data for now
                const workloadColors = workloads.map(w => w > 80 ? 'rgba(253, 126, 20, 0.7)' : (w > 60 ? 'rgba(40, 167, 69, 0.7)' : 'rgba(23, 162, 184, 0.7)'));

                this.charts.workloadChart = new Chart(workloadCtx.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: memberNames,
                        datasets: [{
                            label: 'Charge de travail (%)',
                            data: workloads,
                            backgroundColor: workloadColors,
                            borderColor: workloadColors.map(c => c.replace('0.7)', '1)')),
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: { callback: function(value) { return value + '%'; } }
                            }
                        },
                        plugins: {
                            legend: { display: false },
                            title: { display: true, text: 'Charge de travail par membre' }
                        }
                    }
                });
            }

            // Skills Chart
            const skillsCtx = document.getElementById('skillsChart');
            if (skillsCtx) {
                // Example skills data (can be linked to project data if available)
                const skillsData = {
                    'Java/Spring': 85, 'JavaScript': 75, 'HTML/CSS': 90, 'Bootstrap': 80,
                    'AngularJS': 65, 'SQL': 70, 'UI/UX': 95
                };
                const labels = Object.keys(skillsData);
                const data = Object.values(skillsData);

                this.charts.skillsChart = new Chart(skillsCtx.getContext('2d'), {
                    type: 'polarArea',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Compétences de l\'équipe',
                            data: data,
                            backgroundColor: [
                                'rgba(220, 53, 69, 0.7)', 'rgba(253, 126, 20, 0.7)', 'rgba(255, 193, 7, 0.7)',
                                'rgba(40, 167, 69, 0.7)', 'rgba(23, 162, 184, 0.7)', 'rgba(0, 64, 128, 0.7)',
                                'rgba(108, 117, 125, 0.7)'
                            ],
                            borderColor: [
                                'rgba(220, 53, 69, 1)', 'rgba(253, 126, 20, 1)', 'rgba(255, 193, 7, 1)',
                                'rgba(40, 167, 69, 1)', 'rgba(23, 162, 184, 1)', 'rgba(0, 64, 128, 1)',
                                'rgba(108, 117, 125, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { position: 'right' },
                            title: { display: true, text: 'Répartition des compétences' }
                        },
                        scales: { r: { suggestedMin: 0, suggestedMax: 100 } }
                    }
                });
            }
        }
    }

    // Render Admin Tab content
    renderAdminTab() {
        this.currentProjectId = null; // Ensure no project is active when in admin tab
        this.renderProjectsList(); // Update sidebar to reflect Admin tab as active

        const projectViewEl = document.getElementById('projectView');
        const allProjects = Object.values(this.data.projects || {});

        const projectsListHtml = allProjects.map(project => `
            <tr>
                <td>${project.id}</td>
                <td>${project.title}</td>
                <td>${project.client || 'N/A'}</td>
                <td>${project.startDate || 'N/A'}</td>
                <td><span class="badge bg-${this.getStatusColor(project.status)}">${project.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-info me-1" onclick="portal.loadProject(${project.id})">
                        <i class="fas fa-eye"></i> Voir
                    </button>
                    <button class="btn btn-sm btn-outline-danger delete-project-btn" data-project-id="${project.id}">
                        <i class="fas fa-trash"></i> Supprimer
                    </button>
                </td>
            </tr>
        `).join('');

        projectViewEl.innerHTML = `
            <div class="project-header" data-aos="fade-down">
                <div>
                    <h2><i class="fas fa-user-shield me-2"></i>Administration du système</h2>
                    <p class="project-description">Gérez les projets existants et les paramètres globaux de l'application.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card mb-4" data-aos="fade-up">
                        <div class="card-header">
                            <h5 class="mb-0">Gestion des projets</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Titre</th>
                                            <th>Client</th>
                                            <th>Date de début</th>
                                            <th>Statut</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${projectsListHtml.length > 0 ? projectsListHtml : '<tr><td colspan="6" class="text-center text-muted">Aucun projet à gérer.</td></tr>'}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="card" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-header">
                            <h5 class="mb-0">Paramètres Généraux</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="appName" class="form-label">Nom de l'application</label>
                                    <input type="text" class="form-control" id="appName" value="VibeCoding Dashboard">
                                </div>
                                <div class="mb-3">
                                    <label for="defaultTheme" class="form-label">Thème par défaut</label>
                                    <select class="form-select" id="defaultTheme">
                                        <option>Clair</option>
                                        <option>Sombre</option>
                                    </select>
                                </div>
                                <button type="button" class="btn btn-primary"><i class="fas fa-save me-2"></i>Sauvegarder les paramètres</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
        AOS.refresh();
        this.renderCharts(null); // Ensure charts are destroyed when in Admin tab
    }

    // Delete a project
    deleteProject(projectId) {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible.")) {
            delete this.data.projects[projectId];
            this.saveData();
            this.renderProjectsList(); // Refresh sidebar project list
            
            // If the deleted project was the currently viewed one, navigate to admin tab or first available project
            if (this.currentProjectId === projectId) {
                const remainingProjectIds = Object.keys(this.data.projects);
                if (remainingProjectIds.length > 0) {
                    this.loadProject(parseInt(remainingProjectIds[0]));
                } else {
                    this.renderAdminTab(); // If no projects left, stay on admin tab
                }
            } else {
                this.renderAdminTab(); // If a different project was deleted, refresh the admin tab
            }
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Make portal globally accessible for onclick events in dynamically generated HTML
    window.portal = new ProjectPortal(); 
});
