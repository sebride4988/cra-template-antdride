// @index('./*.ts', (f, _) => `import { ${f.name} } from '${f.path}';`)
import { pokemon } from './pokemon';
// @endindex

const viewTableConfig = {
  // @index('./*.ts', (f, _) => `${f.name},`)
  pokemon,
  // @endindex
};

export default viewTableConfig;
