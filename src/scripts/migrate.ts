import { PrismaClient as PostgresClient } from '@prisma/client';
// @ts-ignore
import { PrismaClient as SqliteClient } from '../../prisma/generated/sqlite-client/index.js';

const pg = new PostgresClient();
const sl = new SqliteClient();

async function main() {
  console.log('🚀 Iniciando migração de dados...');

  try {
    // 1. Migrar Dogs
    const dogs = await sl.dog.findMany();
    console.log(`🐕 Encontrados ${dogs.length} cães no SQLite.`);
    
    for (const dog of dogs) {
      await pg.dog.upsert({
        where: { id: dog.id },
        update: {},
        create: {
          id: dog.id,
          name: dog.name,
          sex: dog.sex,
          status: dog.status,
          birthDate: dog.birthDate,
          pedigreeId: dog.pedigreeId,
          media: dog.media,
          breed: dog.breed,
          color: dog.color,
          coat: dog.coat,
          createdAt: dog.createdAt,
          updatedAt: dog.updatedAt,
        }
      });
    }
    console.log('✅ Cães migrados.');

    // 2. Migrar Litters
    const litters = await sl.litter.findMany();
    console.log(`📦 Encontradas ${litters.length} ninhadas no SQLite.`);
    for (const litter of litters) {
      await pg.litter.upsert({
        where: { id: litter.id },
        update: {},
        create: {
          id: litter.id,
          title: litter.title,
          birthDate: litter.birthDate,
          status: litter.status,
          sireId: litter.sireId,
          damId: litter.damId,
          createdAt: litter.createdAt,
          updatedAt: litter.updatedAt,
        }
      });
    }
    console.log('✅ Ninhadas migradas.');

    // 3. Migrar Puppies
    const puppies = await sl.puppy.findMany();
    console.log(`🐾 Encontrados ${puppies.length} filhotes no SQLite.`);
    for (const puppy of puppies) {
      await pg.puppy.upsert({
        where: { id: puppy.id },
        update: {},
        create: {
          id: puppy.id,
          name: puppy.name,
          sex: puppy.sex,
          color: puppy.color,
          price: puppy.price,
          status: puppy.status,
          litterId: puppy.litterId,
          createdAt: puppy.createdAt,
          updatedAt: puppy.updatedAt,
        }
      });
    }
    console.log('✅ Filhotes migrados.');

    // 4. Migrar Leads
    const leads = await sl.lead.findMany();
    console.log(`📧 Encontrados ${leads.length} contatos/leads no SQLite.`);
    for (const lead of leads) {
      await pg.lead.upsert({
        where: { id: lead.id },
        update: {},
        create: {
          id: lead.id,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          interest: lead.interest,
          status: lead.status,
          answers: lead.answers,
          createdAt: lead.createdAt,
          updatedAt: lead.updatedAt,
        }
      });
    }
    console.log('✅ Leads migrados.');

    // 5. Migrar Vaccines
    try {
      const vaccines = await sl.vaccine.findMany();
      console.log(`💉 Encontradas ${vaccines.length} vacinas no SQLite.`);
      for (const vaccine of vaccines) {
        await pg.vaccine.upsert({
          where: { id: vaccine.id },
          update: {},
          create: {
            id: vaccine.id,
            name: vaccine.name,
            dueDate: vaccine.dueDate,
            appliedDate: vaccine.appliedDate,
            status: vaccine.status,
            notes: vaccine.notes,
            dogId: vaccine.dogId,
            puppyId: vaccine.puppyId,
            createdAt: vaccine.createdAt,
            updatedAt: vaccine.updatedAt,
          }
        });
      }
      console.log('✅ Vacinas migradas.');
    } catch (e) {
      console.log('ℹ️ Tabela de Vacinas não encontrada no SQLite, pulando...');
    }

    // 6. Migrar Clients
    try {
      const clients = await sl.client.findMany();
      console.log(`👤 Encontrados ${clients.length} clientes no SQLite.`);
      for (const client of clients) {
        await pg.client.upsert({
          where: { id: client.id },
          update: {},
          create: {
            id: client.id,
            name: client.name,
            cpf: client.cpf,
            email: client.email,
            phone: client.phone,
            address: client.address,
            notes: client.notes,
            createdAt: client.createdAt,
            updatedAt: client.updatedAt,
          }
        });
      }
      console.log('✅ Clientes migrados.');
    } catch (e) {
      console.log('ℹ️ Tabela de Clientes não encontrada no SQLite, pulando...');
    }

    // 7. Migrar Transactions
    try {
      const transactions = await sl.transaction.findMany();
      console.log(`💰 Encontradas ${transactions.length} transações no SQLite.`);
      for (const transaction of transactions) {
        await pg.transaction.upsert({
          where: { id: transaction.id },
          update: {},
          create: {
            id: transaction.id,
            type: transaction.type,
            category: transaction.category,
            description: transaction.description,
            amount: transaction.amount,
            date: transaction.date,
            clientId: transaction.clientId,
            createdAt: transaction.createdAt,
            updatedAt: transaction.updatedAt,
          }
        });
      }
      console.log('✅ Transações migradas.');
    } catch (e) {
      console.log('ℹ️ Tabela de Transações não encontrada no SQLite, pulando...');
    }

    // 8. Migrar SiteConfig
    try {
      const configs = await sl.siteConfig.findMany();
      console.log(`⚙️ Encontradas ${configs.length} configurações no SQLite.`);
      for (const config of configs) {
        await pg.siteConfig.upsert({
          where: { id: config.id },
          update: {},
          create: {
            id: config.id,
            key: config.key,
            value: config.value,
            label: config.label,
            type: config.type,
            updatedAt: config.updatedAt,
          }
        });
      }
      console.log('✅ Configurações migradas.');
    } catch (e) {
      console.log('ℹ️ Tabela de Configurações não encontrada no SQLite, pulando...');
    }

    console.log('✨ MIGRAÇÃO CONCLUÍDA COM SUCESSO! ✨');
  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
  } finally {
    await pg.$disconnect();
    await sl.$disconnect();
  }
}

main();
