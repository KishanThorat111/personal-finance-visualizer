// components/TransactionForm.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function TransactionForm({ onSubmit, editing, onUpdate, cancelEdit }: any) {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (editing) {
      setValue('amount', editing.amount);
      // Ensure date is formatted correctly for input type="date"
      setValue('date', editing.date.slice(0, 10));
      setValue('description', editing.description);
    } else {
      // Reset form when editing is cancelled
      reset({
        amount: '',
        date: '',
        description: ''
      });
    }
  }, [editing, setValue, reset]); // Added reset to dependency array

  const submit = (data: any) => {
    if (editing) {
      onUpdate(data); // Pass only data, ID is already in editing._id
    } else {
      onSubmit(data);
    }
    reset(); // Reset form after submission
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-4 bg-white/70 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-xl font-bold text-center mb-4">
        {editing ? '✏️ Edit Transaction' : '➕ Add Transaction'}
      </h2>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          {...register('amount', { required: true, valueAsNumber: true })}
          placeholder="Enter amount"
          className="rounded-full bg-white/60 shadow-inner focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          {...register('date', { required: true })}
          className="rounded-full bg-white/60 shadow-inner focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          type="text"
          {...register('description', { required: true })}
          placeholder="e.g. Grocery, Travel"
          className="rounded-full bg-white/60 shadow-inner focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex gap-2 pt-2">
        <Button
          type="submit"
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full shadow-lg"
        >
          {editing ? 'Update' : 'Add'}
        </Button>
        {editing && (
          <Button
            type="button"
            onClick={cancelEdit}
            className="flex-1 bg-slate-300 hover:bg-slate-400 text-black font-semibold rounded-full shadow-lg"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
