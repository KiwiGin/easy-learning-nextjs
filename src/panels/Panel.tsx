
import CardProfile from '../components/CardProfile';
import CourseSelector from '../components/CourseSelector';
import ActivityManagement from './ActivityManagement';
import TestWeeklyManagement from './TestWeeklyManagement';
import QuestionManagement from './QuestionManagement';
import CreateQuestion from './CreateQuestion';

export default function Panel({vista, role}: {vista: string, role?: string}) {
  console.log(vista);
    switch(vista) {
        case 'datos':
          return <CardProfile role={role}/>;
        case 'cursos':
          return <CourseSelector />;
        case 'activity_management': //cambiarlo a evaluation_management
          return <ActivityManagement />; //cambiarlo a evaluation_management
        case 'question_management':
          return <QuestionManagement />;
        case 'reports':
          return <div>Reportes</div>;
        case 'media':
          return <div>Recursos Digitales</div>;
        
        // Subpaneles de activity_management
        case 'test_weekly_management':
          return <TestWeeklyManagement />;
        case 'homework_management':
          return <div>Tareas Domiciliarias</div>;
        case 'reforzamiento_management':
          return <div>Reforzamiento</div>;
        
        // Subpaneles de question_management
        case 'create_question':
          return <CreateQuestion />;
        case 'storage_questions':
          return <div>Preguntas Anteriores</div>;

        // Subpaneles de reports

        // Subsubpaneles de test_weekly_management
        case 'create_test_weekly':
          return <div>Crear Evaluacion Semanal</div>;
        case 'storage_test_weekly':
          return <div>Evaluaciones Semanales Anteriores</div>;
        case 'asign_test':
          return <div>Asignar Evaluacion</div>;
        default:
          return <div>Vista no encontrada</div>;
      }
}

