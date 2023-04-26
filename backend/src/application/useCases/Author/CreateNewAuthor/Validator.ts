import { ConflictException, Injectable } from '@nestjs/common';

import { CreateNewAuthorCommand } from './Command';
import { IValidator } from '../../../../domain/core/Validator';

@Injectable()
export class CreateNewAuthorValidator
  implements IValidator<CreateNewAuthorCommand>
{
  async validate(command: CreateNewAuthorCommand): Promise<void> {
    if (command.name.length < 0)
      throw new ConflictException('El nombre del autor debe ser valido.');
  }
}
