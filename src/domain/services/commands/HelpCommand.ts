import CommandInterface from './CommandInterface';
import {Message} from 'discord.js';

export default class HelpCommand implements CommandInterface {

  COMMAND = 'help'

  async supportCommand(p: { command: string }): Promise<boolean> {
    return p.command === this.COMMAND
  }

  async exec(p: { args: string[]; context: Message }): Promise<void> {
    await p.context.delete()
    await p.context.reply(`
\`-sp search <game>\` : Say that you want to play at <game>, and wait for other players answers :)
\`-sp clear\` : Remove all messages from this bot (only if you have the permission to edit messages)
\`-sp help\` : display this message
\`-sp tag @role|reset\` : choose a role to tag when a new search message is created (only if you have the permission to edit messages)
`
    )
  }

}