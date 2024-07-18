'use client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../globals.css';
export default function WordPage() {
  return (
    <>
      <main style={{ width: '800px', height: '400px' }}>
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'heading', '|',
              'bold', 'italic', 'link', '|',
              'undo', 'redo',
            ],
          }}
        />
      </main>
    </>
  );
}
