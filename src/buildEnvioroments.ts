export enum EntryPoints {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export const ImportEntryPoint = (entryPoint: string) => {
  switch (entryPoint) {
    case EntryPoints.STUDENT: {
      return import('./student');
    }
    case EntryPoints.TEACHER: {
      return import('./teacher');
    }
    default: {
      return import('./teacher');
    }
  }
}