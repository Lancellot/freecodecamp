const defaultMarkdown = `# H1 Heading
## H2 Subheading
[Link](https://www.freecodecamp.org)
\`Inline code\`
\`\`\`
Code block
console.log('Hello World');
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/100)
**Bold text**`;

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
  preview.innerHTML = marked.parse(editor.value, { breaks: true });
}

// Preencher editor com markdown padrão
editor.value = defaultMarkdown;

// Renderizar preview inicial
updatePreview();

// Atualizar preview em tempo real
editor.addEventListener('input', updatePreview);
