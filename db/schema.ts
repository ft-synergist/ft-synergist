import { pgTable, serial, varchar, text, integer, timestamp, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => [
  index('client_slug_idx').on(table.slug),
]);

export const grantServices = pgTable('grant_services', {
  id: serial('id').primaryKey(),
  clientId: integer('client_id').references(() => clients.id, { onDelete: 'cascade' }).notNull(),
  serviceType: varchar('service_type', { length: 100 }).notNull(),
  parameterDetails: text('parameter_details').notNull(),
});

export const quantitativeOutcomes = pgTable('quantitative_outcomes', {
  id: serial('id').primaryKey(),
  clientId: integer('client_id').references(() => clients.id, { onDelete: 'cascade' }).notNull(),
  outcomeMetric: text('outcome_metric').notNull(),
  timelineMonths: integer('timeline_months').notNull(),
});

export const clientsRelations = relations(clients, ({ many }) => ({
  grantServices: many(grantServices),
  quantitativeOutcomes: many(quantitativeOutcomes),
}));

export const grantServicesRelations = relations(grantServices, ({ one }) => ({
  client: one(clients, { fields: [grantServices.clientId], references: [clients.id] }),
}));

export const quantitativeOutcomesRelations = relations(quantitativeOutcomes, ({ one }) => ({
  client: one(clients, { fields: [quantitativeOutcomes.clientId], references: [clients.id] }),
}));
