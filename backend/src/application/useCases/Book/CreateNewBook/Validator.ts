import { ConflictException, Injectable } from '@nestjs/common';

import { CreateNewBookCommand } from './Command';
import { IValidator } from '../../../../domain/core/Validator';

@Injectable()
export class CreateNewBookValidator
  implements IValidator<CreateNewBookCommand>
{
  async validate(command: CreateNewBookCommand): Promise<void> {
    if (command.title.length < 0)
      throw new ConflictException('El titulo del libro debe ser valido.');

    if (command.authors.length < 0)
      throw new ConflictException('El libro debe contener al menos un autor.');
  }
}
