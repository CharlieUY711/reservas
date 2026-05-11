create or replace function create_default_agenda()
returns trigger as components/WeeklyGrid/index.tsx
begin
  if NEW.role = 'professional' then
    insert into agendas (professional_id, title, is_default)
    values (NEW.id, 'Agenda principal', true);
  end if;
  return NEW;
end;
components/WeeklyGrid/index.tsx language plpgsql;

create trigger on_profile_created
after insert on profiles
for each row
execute procedure create_default_agenda();
