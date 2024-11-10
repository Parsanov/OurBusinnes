import "./technology.css"



const Technology = () => {
    return ( 
        <div className="main-container">
                <div className="tech-conteiner">
                    <h2 class="tech-title">Основні технології</h2>
                        <div class="tech-grid">
                            <div class="tech-card">
                                <h3><span class="icon">F</span>Frontend</h3>
                                <p>В якості GUI виступає телеграм бот, в майбутньому, з експансією послуг на інші ресурси, буде додано веб версію на React JS, котра дозволятиме взаємодіяти з усіма месенджерами.</p>
                            </div>
                            
                            <div class="tech-card">
                                <h3><span class="icon">B</span>Backend</h3>
                                <p>Телеграм бота розроблено на TypeScript з використанням бібліотеки Bot API - "GrammY".</p>
                            </div>
                            
                            <div class="tech-card">
                                <h3><span class="icon">D</span>Database</h3>
                                <p>Універсальне та перевірене часом рішення - PostgreSQL + Redis (Cache + Message Queue).</p>
                            </div>
                            
                            <div class="tech-card">
                                <h3><span class="icon">C</span>Cloud infrastructure</h3>
                                <p>Linux VPS, k8s з blue-green deployment strategy для забезпечення 100% аптайму.</p>
                            </div>
                            
                            <div class="tech-card">
                                <h3><span class="icon">M</span>Monitoring</h3>
                                <p>Grafana + Prometheus.</p>
                            </div>
                    </div> 
                </div>
        </div>
    );
}
 
export default Technology;