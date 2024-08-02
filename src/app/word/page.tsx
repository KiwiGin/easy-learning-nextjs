'use client';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import '../globals.css';

export default function WordPage() {
  return (
    <>
      <main style={{ width: '800px', height: '400px' }}>
        <h1>Word on progress</h1>
        {/* <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'heading', '|',
              'bold', 'italic', 'link', '|',
              'undo', 'redo',
            ],
          }}
        /> */}
      </main>
    </>
  );
}


// 'use client';
// import dynamic from 'next/dynamic';
// import '../globals.css';
// import { FC } from 'react';
// import { CKEditor as CKEditorType } from '@ckeditor/ckeditor5-react'; // Import CKEditor type

// // Import CKEditor dynamically only on the client
// const CKEditor = dynamic<CKEditorType>(
//   () => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor),
//   { ssr: false }
// );

// const ClassicEditor = dynamic<any>(
//   () => import('@ckeditor/ckeditor5-build-classic'),
//   { ssr: false }
// );

// const WordPage: FC = () => {
//   return (
//     <main style={{ width: '800px', height: '400px' }}>
//       <CKEditor
//         editor={ClassicEditor as any}
//         config={{
//           toolbar: [
//             'heading', '|',
//             'bold', 'italic', 'link', '|',
//             'undo', 'redo',
//           ],
//         }}
//       />
//     </main>
//   );
// };

// export default WordPage;

