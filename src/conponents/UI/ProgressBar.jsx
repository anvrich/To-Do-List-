import "./ProgressBar.css"

export default function ProgressBar({tasks}) {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{width: `${progress}%`}}></div>
            <span className="progress-percentage">{Math.round(progress)}%</span>
        </div>
    );
}
